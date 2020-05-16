/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import applyFilters from './applyFilters';
import where from './filters/where';
import { Linq } from './linq';
import all from './resolutions/all';
import any from './resolutions/any';
import count from './resolutions/count';
import toArray from './resolutions/toArray';
import groupBy from './transforms/groupBy';
import select from './transforms/select';
export class LinqExtended extends Linq {
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {LinqExtended<T>}
     */
    filter(...filters) {
        return filters.length ? this.filters(filters) : this;
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {LinqExtended<T>}
     */
    filters(filters) {
        return new LinqExtended(applyFilters(this.source, filters));
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {LinqExtended<TResult>}
     */
    transform(transform) {
        return new LinqExtended(transform(this.source));
    }
    ////// EXTENDED METHODS //////
    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {LinqExtended<T>}
     */
    where(predicate) {
        return this.filter(where(predicate));
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
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {LinqExtended<TResult>}
     */
    select(selector) {
        return this.transform(select(selector));
    }
    /**
     * Groups entries together by selected key.
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @return {LinqExtended<Grouping<TKey, T>>}
     */
    groupBy(keySelector) {
        return this
            .transform(groupBy(keySelector))
            .select(g => new LinqGrouping(g));
    }
    /**
     * Returns all the entries in the sequence as an array.
     * @return {T[]}
     */
    toArray() {
        return toArray(this.source);
    }
}
export class LinqGrouping extends LinqExtended {
    constructor(grouping) {
        super(grouping.elements);
        this.key = grouping.key;
    }
}
/**
 * Returns a special extended version of Linq<T> which includes common operations like .where(predicate) .select(selector) and more with the consequence of a potentially larger footprint.
 * To minimize included modules use the standard version (linq) and import only the filters, transforms and resolutions needed.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linqExtended(source) {
    if (source instanceof LinqExtended)
        return source;
    return new LinqExtended(source);
}
//# sourceMappingURL=linqExtended.js.map