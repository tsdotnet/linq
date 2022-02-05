/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import LinqBase from "./LinqBase";
import all from './resolutions/all';
import any from './resolutions/any';
import count from './resolutions/count';
import toArray from './resolutions/toArray';
import single from './resolutions/single';
import singleOrDefault from './resolutions/singleOrDefault';
import first from './resolutions/first';
import firstOrDefault from './resolutions/firstOrDefault';
import last from './resolutions/last';
import lastOrDefault from './resolutions/lastOrDefault';
export default class LinqExtendedBase extends LinqBase {
    constructor(source, create) {
        super(source, create);
    }
    /**
     * Returns all the entries in the sequence as a new array.
     * @return {T[]}
     */
    toArray() {
        return toArray(this.source);
    }
    /**
     * Returns the number of entries in a sequence.
     * If a predicate is provided, filters the count based upon the predicate.
     * Otherwise counts all the entries in the sequence.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    count(predicate) {
        return count(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns true if the predicate ever returns true; otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    any(predicate) {
        return any(predicate)(this.source);
    }
    /**
     * Returns false if the predicate ever returns false; otherwise true.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {boolean}
     */
    all(predicate) {
        return all(predicate)(this.source);
    }
    /**
     * Returns the expected single element; otherwise throws an InvalidOperationException.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    single(predicate) {
        return single(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the expected single element; otherwise the provided default value.
     * @param {TDefault} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | TDefault}
     */
    singleOrDefault(defaultValue, predicate) {
        return singleOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the expected single element; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    singleOrUndefined(predicate) {
        return singleOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the first element of the sequence.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    first(predicate) {
        return first(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the first element of the sequence or the default value if no element is found.
     * @param {TDefault} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | TDefault}
     */
    firstOrDefault(defaultValue, predicate) {
        return firstOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the first element of the sequence; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    firstOrUndefined(predicate) {
        return firstOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the last element of the sequence.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T}
     */
    last(predicate) {
        return last(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the last element of the sequence or the default value if no element is found.
     * @param {TDefault} defaultValue
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | TDefault}
     */
    lastOrDefault(defaultValue, predicate) {
        return lastOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    /**
     * Returns the last element of the sequence; otherwise undefined.
     * @param {PredicateWithIndex<T>} [predicate]
     * @return {T | undefined}
     */
    lastOrUndefined(predicate) {
        return lastOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
}
//# sourceMappingURL=LinqExtendedBase.js.map