/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter, IterableValueTransform } from './IterableTransform';
import { Grouping, GroupingResult } from './transforms/groupBy';
import LinqResolverBase from './LinqResolverBase';
/**
 * Extended version of `Linq<T>` that includes common LINQ methods like `.where()` and `.select()` and `.groupBy()`.
 */
export declare class LinqExtended<T> extends LinqResolverBase<T, LinqExtended<T>> {
    protected readonly source: Iterable<T>;
    constructor(source: Iterable<T>);
    /**
     * Returns a filtered sequence.
     * Same effect as .transform(filter).
     * @param {IterableValueTransform<T, TResult>} filter
     * @return {Linq<TResult>}
     */
    filter<TResult>(filter: IterableValueTransform<T, TResult>): LinqExtended<TResult>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filter(filter: IterableFilter<T>): LinqExtended<T>;
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {LinqExtended<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): LinqExtended<TResult>;
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {LinqExtended<TResult>}
     */
    select<TResult>(selector: SelectorWithIndex<T, TResult>): LinqExtended<TResult>;
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {LinqExtended<TResult>}
     */
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): LinqExtended<TResult>;
    /**
     * Groups entries together by selected key.
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @return {LinqExtended<Grouping<TKey, T>>}
     */
    groupBy<TKey>(keySelector: SelectorWithIndex<T, TKey>): LinqExtended<LinqGrouping<TKey, T>>;
}
export declare class LinqGrouping<TKey, T> extends LinqExtended<T> implements Grouping<TKey, T> {
    readonly key: TKey;
    constructor(grouping: GroupingResult<TKey, T>);
}
/**
 * Returns a special extended version of Linq<T> which includes common operations like .where(predicate) .select(selector) and more with the consequence of a potentially larger footprint.
 * To minimize included modules use the standard version (linq) and import only the filters, transforms and resolutions needed.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linqExtended<T>(source: Iterable<T>): LinqExtended<T>;
