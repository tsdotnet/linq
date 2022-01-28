"use strict";
/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinqGrouping = exports.LinqExtended = void 0;
const tslib_1 = require("tslib");
const applyFilters_1 = tslib_1.__importDefault(require("./applyFilters"));
const where_1 = tslib_1.__importDefault(require("./filters/where"));
const linq_1 = require("./linq");
const all_1 = tslib_1.__importDefault(require("./resolutions/all"));
const any_1 = tslib_1.__importDefault(require("./resolutions/any"));
const count_1 = tslib_1.__importDefault(require("./resolutions/count"));
const toArray_1 = tslib_1.__importDefault(require("./resolutions/toArray"));
const first_1 = tslib_1.__importDefault(require("./resolutions/first"));
const firstOrDefault_1 = tslib_1.__importDefault(require("./resolutions/firstOrDefault"));
const last_1 = tslib_1.__importDefault(require("./resolutions/last"));
const lastOrDefault_1 = tslib_1.__importDefault(require("./resolutions/lastOrDefault"));
const groupBy_1 = tslib_1.__importDefault(require("./transforms/groupBy"));
const select_1 = tslib_1.__importDefault(require("./transforms/select"));
const selectMany_1 = tslib_1.__importDefault(require("./transforms/selectMany"));
const skip_1 = tslib_1.__importDefault(require("./filters/skip"));
const take_1 = tslib_1.__importDefault(require("./filters/take"));
/**
 * Extended version of `Linq<T>` that includes common LINQ methods like `.where()` and `.select()` and `.groupBy()`.
 */
class LinqExtended extends linq_1.Linq {
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
        return new LinqExtended(applyFilters_1.default(this.source, filters));
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
        return this.filter(where_1.default(predicate));
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
            ? count_1.default(where_1.default(predicate)(this.source))
            : count_1.default(this.source);
    }
    /**
     * Returns true if the predicate ever returns true. Otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    any(predicate) {
        return any_1.default(predicate)(this.source);
    }
    /**
     * Returns false if the predicate ever returns false. Otherwise true.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    all(predicate) {
        return all_1.default(predicate)(this.source);
    }
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {LinqExtended<TResult>}
     */
    select(selector) {
        return this.transform(select_1.default(selector));
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {LinqExtended<TResult>}
     */
    selectMany(selector) {
        return this.transform(selectMany_1.default(selector));
    }
    /**
     * Groups entries together by selected key.
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @return {LinqExtended<Grouping<TKey, T>>}
     */
    groupBy(keySelector) {
        return this
            .transform(groupBy_1.default(keySelector))
            .select(g => new LinqGrouping(g));
    }
    /**
     * Returns all the entries in the sequence as an array.
     * @return {T[]}
     */
    toArray() {
        return toArray_1.default(this.source);
    }
    /**
     * Returns the first element of a sequence.
     */
    first() {
        return first_1.default(this.source);
    }
    firstOrDefault(defaultValue) {
        return firstOrDefault_1.default(defaultValue)(this.source);
    }
    /**
     * Returns the last element of a sequence.
     */
    last() {
        return last_1.default(this.source);
    }
    lastOrDefault(defaultValue) {
        return lastOrDefault_1.default(defaultValue)(this.source);
    }
    /**
     * When resolving, skips the number of elements by the count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    skip(count) {
        return this.filter(skip_1.default(count));
    }
    /**
     * When resolving, takes no more than the number of elements by the provided count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    take(count) {
        return this.filter(take_1.default(count));
    }
}
exports.LinqExtended = LinqExtended;
class LinqGrouping extends LinqExtended {
    constructor(grouping) {
        super(grouping.elements);
        this.key = grouping.key;
    }
}
exports.LinqGrouping = LinqGrouping;
/**
 * Returns a special extended version of Linq<T> which includes common operations like .where(predicate) .select(selector) and more with the consequence of a potentially larger footprint.
 * To minimize included modules use the standard version (linq) and import only the filters, transforms and resolutions needed.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
function linqExtended(source) {
    if (source instanceof LinqExtended)
        return source;
    return new LinqExtended(source);
}
exports.default = linqExtended;
//# sourceMappingURL=linqExtended.js.map