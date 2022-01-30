/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import LinqBase from "./LinqBase";
export default abstract class LinqResolverBase<T, TLinq extends LinqResolverBase<T, TLinq>> extends LinqBase<T, TLinq> {
    constructor(source: Iterable<T>, create: (source: Iterable<T>) => TLinq);
    /**
     * Returns all the entries in the sequence as a new array.
     * @return {T[]}
     */
    toArray(): T[];
    /**
     * Returns the number of entries in a sequence.
     * If a predicate is provided, filters the count based upon the predicate.
     * Otherwise counts all the entries in the sequence.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    count(predicate?: PredicateWithIndex<T>): number;
    /**
     * Returns true if the predicate ever returns true. Otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    any(predicate?: PredicateWithIndex<T>): boolean;
    /**
     * Returns false if the predicate ever returns false. Otherwise true.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    all(predicate: PredicateWithIndex<T>): boolean;
    /**
     * Returns the expected single element; otherwise throws an InvalidOperationException.
     */
    single(): T;
    /**
     * Returns the expected single element; otherwise undefined.
     */
    singleOrDefault(): T | undefined;
    singleOrDefault(defaultValue: T): T;
    /**
     * Returns the first element of a sequence.
     */
    first(): T;
    /**
     * Returns the first element of a sequence or the default value if no element is found.
     */
    firstOrDefault(): T | undefined;
    firstOrDefault(defaultValue: T): T;
    /**
     * Returns the last element of a sequence.
     */
    last(): T;
    /**
     * Returns the first element of a sequence or the default value if no element is found.
     */
    lastOrDefault(): T | undefined;
    lastOrDefault(defaultValue: T): T;
}
