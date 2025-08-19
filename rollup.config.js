import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default defineConfig({
  input: 'src/index.ts', // Just use the main entry point
  output: {
    dir: 'dist/esm',
    format: 'es',
    preserveModules: true, // This will automatically include all imported files!
    preserveModulesRoot: 'src',
    entryFileNames: '[name].js',
    sourcemap: true
  },
  external: [
    // Node core modules
    /^node:/,
    // All dependencies and peer dependencies
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.esm.json',
      declaration: false, // Keep your existing types build
      declarationMap: false,
      sourceMap: true,
      removeComments: true // Explicitly remove source comments
    })
  ]
});




