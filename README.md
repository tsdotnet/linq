<a href="https://tsdotnet.github.io/linq/"><img src="https://cdn.jsdelivr.net/gh/tsdotnet/linq@master/assets/banner.svg" alt="@tsdotnet/linq: LINQ for iterables. Filter, map and resolve, evaluated lazily."></a>

[![npm version](https://img.shields.io/npm/v/@tsdotnet/linq.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/linq)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/linq/blob/master/LICENSE)

Lazy, composable queries over any JavaScript iterable, the way .NET's LINQ works over enumerables.

## Install

```sh
npm install @tsdotnet/linq
```

## Usage

```ts
import linq, { iterables, resolutions } from '@tsdotnet/linq';

const odd = linq(iterables.range(1, 100)).where(n => n % 2 === 1);

for (const n of odd.take(3)) console.log(n); // 1, 3, 5
odd.resolve(resolutions.sum);                // 2500
```

Nothing runs until you iterate or resolve. Each step is a plain function, so you pay only for what you import:

- **filters** keep the type: `where`, `skip`, `take`, `distinct`, `descending` …
- **transforms** change it: `select`, `selectMany`, `groupBy`, `notNull` …
- **resolutions** end the chain with a value: `sum`, `count`, `first`, `last` …

`linqExtended` adds the common resolutions as methods: `.count()`, `.first()`, `.any()`.

## Use it from

ESM (`import linq from '@tsdotnet/linq';`) or CommonJS (`const linq = require('@tsdotnet/linq').default;`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/type@1/dist/umd/type.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/compare@1/dist/umd/compare.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/exceptions@1/dist/umd/exceptions.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/integer@1/dist/umd/integer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/collection-base@2/dist/umd/collection-base.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/linked-node-list@1/dist/umd/linked-node-list.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/memoize@1/dist/umd/memoize.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/queue@1/dist/umd/queue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/linq@1/dist/umd/linq.min.js"></script>
<script>
  const linq = tsdotnet.linq.default;
</script>
```

</details>

## Docs

[tsdotnet.github.io/linq](https://tsdotnet.github.io/linq/)
