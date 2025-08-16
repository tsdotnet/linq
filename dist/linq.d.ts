/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import LinqBase from './LinqBase';
import { IterableFilter, IterableValueTransform } from './IterableTransform';
import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
/**
 * Simplest abstraction for building an extensible iterable query.
 */
export declare class Linq<T> extends LinqBase<T, Linq<T>> {
    protected readonly source: Iterable<T>;
    constructor(source: Iterable<T>);
    [Symbol.iterator](): Iterator<T>;
    /**
     * Returns a filtered sequence.
     * Same effect as .transform(filter).
     * @param {IterableValueTransform<T, TResult>} filter
     * @return {Linq<TResult>}
     */
    filter<TResult>(filter: IterableValueTransform<T, TResult>): Linq<TResult>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filter(filter: IterableFilter<T>): Linq<T>;
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Linq<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult>;
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Linq<TResult>}
     */
    select<TResult>(selector: SelectorWithIndex<T, TResult>): Linq<TResult>;
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Linq<TResult>}
     */
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Linq<TResult>;
}
/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq<T>(source: Iterable<T>): Linq<T>;
