/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import LinqBase from "./LinqBase";
import where from './filters/where';
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
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    count(predicate) {
        return predicate
            ? count(where(predicate)(this.source))
            : count(this.source);
    }
    /**
     * Returns true if the predicate ever returns true. Otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    any(predicate) {
        return any(predicate)(this.source);
    }
    /**
     * Returns false if the predicate ever returns false. Otherwise true.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    all(predicate) {
        return all(predicate)(this.source);
    }
    /**
     * Returns the expected single element; otherwise throws an InvalidOperationException.
     */
    single() {
        return single(this.source);
    }
    singleOrDefault(defaultValue) {
        return singleOrDefault(defaultValue)(this.source);
    }
    /**
     * Returns the first element of a sequence.
     */
    first() {
        return first(this.source);
    }
    firstOrDefault(defaultValue) {
        return firstOrDefault(defaultValue)(this.source);
    }
    /**
     * Returns the last element of a sequence.
     */
    last() {
        return last(this.source);
    }
    lastOrDefault(defaultValue) {
        return lastOrDefault(defaultValue)(this.source);
    }
}
//# sourceMappingURL=LinqExtendedBase.js.map