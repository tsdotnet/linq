# ![alt text](https://avatars1.githubusercontent.com/u/64487547?s=30 "tsdotnet") tsdotnet / linq

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/linq/blob/master/LICENSE)
![100% code coverage](https://img.shields.io/badge/coverage-100%25-green)
![npm-publish](https://github.com/tsdotnet/linq/workflows/npm-publish/badge.svg)
[![npm version](https://img.shields.io/npm/v/@tsdotnet/linq.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/linq)

A familiar set of functions that operate on JavaScript iterables (ES2015+) in a similar way to .NET's LINQ does with enumerables.

## Docs

[tsdotnet.github.io/linq](https://tsdotnet.github.io/linq/)

## Source

[GitHub](https://github.com/tsdotnet/linq)

## API

### `linq<T>` vs `linqExtended<T>`

It is possible to do everything with just `linq` but `linqExtended` offers more functionality for those expecting to use common resolutions like `.count`, `.first`, `.last`, etc.  Using `linq` will save you some bytes when your common use cases do not need resolutions.

### Iterating

```typescript
for(const e of linq(source).filter(a)) {
    // Iterate filtered results.
}
```

```typescript
for(const e of linq(source)
    .filterWith(a, b, c)
    .transform(x)) {
    // Iterate filtered and then transformed results.
}
```

```typescript
for(const e of linq(source)
    .where(predicate)
    .skip(10).take(10)
    .select(mapping)) {
    // Iterate filtered and mapped results.
}
```

### Resolving

```typescript
const result = linq(source)
    .filterWith(a, b, c)
    .transform(x)
    .resolve(r);
```

```typescript
const firstElement = linqExtended(source)
    .where(predicate)
    .select(mapping)
    .first();
```


## Examples

### `linq<T>` with imported filters

```typescript
import linq from '@tsdotnet/linq/dist/linq';
import range from '@tsdotnet/linq/dist/iterables/range';
import where from '@tsdotnet/linq/dist/filters/where';
import descending from '@tsdotnet/linq/dist/filters/descending';

const source = range(1,100); // Iterable<number>
const filtered = linq(source).filters(
     where(n => n%2===1),
     descending);

for(const o of filtered) {

    // Emit all odd numbers in descending order.
    console.log(o);  // 99, 97, 95 ...
}
```

### `linq<T>` with simplified imports

```typescript
import linq, {iterables, resolutions} from '@tsdotnet/linq';

const source = iterables.range(1,100); // Iterable<number>
const result = linq(source)
    .where(n => n%2===1) // odd numbers only
    .resolve(resolutions.sum); // 2500
```

or

```typescript
import linq from '@tsdotnet/linq';
import {range} from '@tsdotnet/linq/dist/iterables';
import {sum} from '@tsdotnet/linq/dist/resolutions';

const source = range(1, 100); // Iterable<number>
const result = linqExtended(source)
    .where(n => n%2===1) // odd numbers only
    .resolve(sum); // 2500
```

## Concepts

### Iterables

ES2015 enables full support for the [iteration protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

Iterables are a significant leap forward in operating with data sequences.
Instead of loading entire sets into arrays or other collections, iterables allow for progressive iteration or synchronous streaming of data.

`tsdotnet/linq` is designed around iterables but also optimized for arrays.

#### Generators

`Iterable<T>` helpers are provided as sources.  Calling for an `Iterator<T>` should always start from the beginning and iterators are not shared.  Same behavior as LINQ in .NET.

`empty`, `range`, and `repeat` to name a few.
See the [docs](https://tsdotnet.github.io/linq/) for a full list.

### Filters

```typescript
linq(source).filter(a, b);
linq(source).filter(a).filter(b);
linq(source).filter(a).where(predicate);
```

Any function that receives an `Iterable<T>` and returns an `Iterable<T>` is considered an
`IterableFilter<T>`.  A filter may result in a different order or ultimately a completely different set than the input but must be of the same type.

There are an extensive set of filters.
See the [docs](https://tsdotnet.github.io/linq/) for a full list.

### Transforms

```typescript
linq(source).transform(x);
linq(source).filter(a).transform(x);
linq(source).where(predicate).transform(x);
linq(source).where(predicate).select(mapping);
```

Any function that receives an `Iterable<T>` and returns an `Iterable<TResult>` is considered an
`IterableValueTransform<T, TResult>`.

Any filter can be used as a transform, but not every transform can be used as a filter.

`notNull`, `rows`, `select`, `selectMany` and `groupBy` to name a few.
See the [docs](https://tsdotnet.github.io/linq/) for a full list.

### Resolutions

```typescript
sequence = linq(source);

sequence.resolve(r);
sequence.transform(x).resolve(r);
sequence.filter(a).transform(x).resolve(r);
sequence.where(predicate).resolve(r);
sequence.filterWith(a, b).transform(x).resolve(r);
```

```typescript
sequence = linqExtended(source);

// Examples: 
sequence.any(predicate);
sequence.any(); // resolution predicates are optional.

sequence.count(predicate);
sequence.first(predicate);
sequence.last(predicate);
sequence.singleOrDefault(defaultValue, predicate);
sequence.firstOrUndefined(predicate);
```

A resolution is a transform that takes an `Iterable<T>` and returns `TResult`.
Unlike `.filter(a)` and `.transform(x)`, `.resolve(r)` does not wrap the result in another `Linq<T>`.

There are an extensive set of resolutions.
See the [docs](https://tsdotnet.github.io/linq/) for a full list.

## History

Originally this was a port of `linq.js` converted to full TypeScript under the name `TypeScript.NET Library` and then `TypeScript.NET-Core` with full module support but potentially more than a user might want for a simple task.  Instead of .NET style extensions, `Enumerables` incurred a heavy cost of all the extensions under one module.

Modern web standards and practices demanded more granular access to classes and functions.  Hence `tsdotnet` was born.  `tsdotnet/linq` functionally allows for all the features of its predecessor as well as providing type-safety, and most of the features of LINQ in .NET while not forcing the consumer to download unneeded/undesired modules (extensions).
