/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import LinqBase from "./LinqBase";
export default abstract class LinqExtendedBase<T, TLinq extends LinqExtendedBase<T, TLinq>> extends LinqBase<T, TLinq> {
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
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    count(predicate?: PredicateWithIndex<T>): number;
    /**
     * Returns true if the predicate ever returns true; otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    any(predicate?: PredicateWithIndex<T>): boolean;
    /**
     * Returns false if the predicate ever returns false; otherwise true.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    all(predicate: PredicateWithIndex<T>): boolean;
    /**
     * Returns the expected single element; otherwise throws an InvalidOperationException.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    single(predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the expected single element; otherwise the provided default value.
     * @param {T} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    singleOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the expected single element; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    singleOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
    /**
     * Returns the first element of the sequence.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    first(predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the first element of the sequence or the default value if no element is found.
     * @param {T} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    firstOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the first element of the sequence; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    firstOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
    /**
     * Returns the last element of the sequence.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    last(predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the last element of the sequence or the default value if no element is found.
     * @param {T} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    lastOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T;
    /**
     * Returns the last element of the sequence; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    lastOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
}
