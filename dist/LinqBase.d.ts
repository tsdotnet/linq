/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { PredicateWithIndex, SelectorWithIndex } from "@tsdotnet/common-interfaces";
import { IterableFilter, IterableTransform, IterableValueTransform } from "./IterableTransform";
export default abstract class LinqBase<T, TLinq extends LinqBase<T, TLinq>> implements Iterable<T> {
    protected readonly source: Iterable<T>;
    protected readonly create: (source: Iterable<T>) => TLinq;
    constructor(source: Iterable<T>, create: (source: Iterable<T>) => TLinq);
    [Symbol.iterator](): Iterator<T>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filter(filter: IterableFilter<T>): TLinq;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filterWith(...filters: IterableFilter<T>[]): TLinq;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    applyFilters(filters: Iterable<IterableFilter<T>>): TLinq;
    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {TLinq<T>}
     */
    where(predicate: PredicateWithIndex<T>): TLinq;
    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve<TResolution>(resolver: IterableTransform<T, TResolution>): TResolution;
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Iterable<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Iterable<TResult>;
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Iterable<TResult>}
     */
    select<TResult>(selector: SelectorWithIndex<T, TResult>): Iterable<TResult>;
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Iterable<TResult>}
     */
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Iterable<TResult>;
    /**
     * When resolving, skips the number of elements by the count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    skip(count: number): TLinq;
    /**
     * When resolving, takes no more than the number of elements by the provided count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    take(count: number): TLinq;
}
