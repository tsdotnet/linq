import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter, IterableValueTransform } from './IterableTransform';
import { Grouping, GroupingResult } from './transforms/groupBy';
import LinqExtendedBase from './LinqExtendedBase';
export declare class LinqExtended<T> extends LinqExtendedBase<T, LinqExtended<T>> {
    protected readonly source: Iterable<T>;
    constructor(source: Iterable<T>);
    filter<TResult>(filter: IterableValueTransform<T, TResult>): LinqExtended<TResult>;
    filter(filter: IterableFilter<T>): LinqExtended<T>;
    transform<TResult>(transform: IterableValueTransform<T, TResult>): LinqExtended<TResult>;
    select<TResult>(selector: SelectorWithIndex<T, TResult>): LinqExtended<TResult>;
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): LinqExtended<TResult>;
    groupBy<TKey>(keySelector: SelectorWithIndex<T, TKey>): LinqExtended<LinqGrouping<TKey, T>>;
}
export declare class LinqGrouping<TKey, T> extends LinqExtended<T> implements Grouping<TKey, T> {
    readonly key: TKey;
    constructor(grouping: GroupingResult<TKey, T>);
}
export default function linqExtended<T>(source: Iterable<T>): LinqExtended<T>;
