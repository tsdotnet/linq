import type { PredicateWithIndex, SelectorWithIndex } from "@tsdotnet/common-interfaces";
import { IterableFilter, IterableTransform, IterableValueTransform } from "./IterableTransform";
export default abstract class LinqBase<T, TLinq extends LinqBase<T, TLinq>> implements Iterable<T> {
    protected readonly source: Iterable<T>;
    protected readonly create: (source: Iterable<T>) => TLinq;
    constructor(source: Iterable<T>, create: (source: Iterable<T>) => TLinq);
    [Symbol.iterator](): Iterator<T>;
    filter(filter: IterableFilter<T>): TLinq;
    filterWith(...filters: IterableFilter<T>[]): TLinq;
    applyFilters(filters: Iterable<IterableFilter<T>>): TLinq;
    where(predicate: PredicateWithIndex<T>): TLinq;
    resolve<TResolution>(resolver: IterableTransform<T, TResolution>): TResolution;
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Iterable<TResult>;
    select<TResult>(selector: SelectorWithIndex<T, TResult>): Iterable<TResult>;
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Iterable<TResult>;
    skip(count: number): TLinq;
    take(count: number): TLinq;
}
