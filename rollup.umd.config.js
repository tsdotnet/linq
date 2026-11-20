import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'node:fs';

// UMD build (global / AMD / CommonJS in one file). Additive: dist/esm, dist/cjs, dist/types do not depend on it.
// Names are derived from package.json. Anything that is neither relative nor an @tsdotnet/* package fails the build.
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
const short = pkg.name.replace(/^@tsdotnet\//, '');
const camel = s => s.replace(/[-_]+([a-z0-9])/gi, (_, c) => c.toUpperCase());
const globalFor = id => 'tsdotnet.' + id.replace(/^@tsdotnet\//, '').split('/').map(camel).join('_');
const isTsdotnet = id => id.startsWith('@tsdotnet/');

const umdOutput = {
  format: 'umd',
  name: globalFor(pkg.name),
  extend: true,
  exports: 'named',
  interop: 'auto', // default imports of @tsdotnet deps read .default (all carry __esModule); 2026-11-20 fix
  // Only map @tsdotnet/* ids: rollup also passes the first segment of `name` ('tsdotnet') through `globals`,
  // and mapping it gave global["tsdotnet.tsdotnet"] (broken <script> use; found by consumer-matrix M13).
  globals: id => (isTsdotnet(id) ? globalFor(id) : undefined),
  sourcemap: true
};

// Two files: readable <name>.js (the "./umd" export, AMD/CJS users) and minified <name>.min.js (unpkg/jsdelivr,
// <script> users), each with its own source map. Operator decision 2026-11-19.
const commonjsMarker = {
  name: 'umd-commonjs-marker',
  generateBundle() {
    this.emitFile({ type: 'asset', fileName: 'package.json', source: '{"type":"commonjs"}\n' });
  }
};

// Entry = the source of the "." export's ESM types path (dist/types/X.d.ts -> src/X.ts); not every package uses index.
const dotTypes = pkg.exports?.['.']?.import?.types;
if (typeof dotTypes !== 'string' || !dotTypes.startsWith('./dist/types/')) throw new Error('rollup.umd.config.js: exports["."].import.types not under ./dist/types/');
const input = dotTypes.replace(/^\.\/dist\/types\//, 'src/').replace(/\.d\.ts$/, '.ts');

export default defineConfig({
  input,
  output: [
    { ...umdOutput, file: `dist/umd/${short}.js`, plugins: [commonjsMarker] },
    { ...umdOutput, file: `dist/umd/${short}.min.js`, plugins: [terser()] }
  ],
  external: isTsdotnet,
  onwarn(warning, warn) {
    if (warning.code === 'UNRESOLVED_IMPORT' || warning.code === 'MISSING_GLOBAL_NAME') throw new Error(warning.message);
    warn(warning);
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.esm.json',
      outDir: 'dist/umd',
      declaration: false,
      declarationMap: false,
      importHelpers: false,
      sourceMap: true,
      removeComments: true
    })
  ]
});
