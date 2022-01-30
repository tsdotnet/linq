"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const where_1 = (0, tslib_1.__importDefault)(require("./filters/where"));
const applyFilters_1 = (0, tslib_1.__importDefault)(require("./applyFilters"));
const select_1 = (0, tslib_1.__importDefault)(require("./transforms/select"));
const selectMany_1 = (0, tslib_1.__importDefault)(require("./transforms/selectMany"));
const skip_1 = (0, tslib_1.__importDefault)(require("./filters/skip"));
const take_1 = (0, tslib_1.__importDefault)(require("./filters/take"));
class LinqBase {
    constructor(source, create) {
        this.source = source;
        this.create = create;
    }
    [Symbol.iterator]() {
        return this.source[Symbol.iterator]();
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filter(filter) {
        return this.create(filter(this.source));
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filterWith(...filters) {
        return filters.length === 0 ? this : this.applyFilters(filters);
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    applyFilters(filters) {
        const source = this.source;
        const s = (0, applyFilters_1.default)(source, filters);
        return s == source ? this : this.create(s);
    }
    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {TLinq<T>}
     */
    where(predicate) {
        return this.filter((0, where_1.default)(predicate));
    }
    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve(resolver) {
        return resolver(this.source);
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Iterable<TResult>}
     */
    transform(transform) {
        return transform(this.source);
    }
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Iterable<TResult>}
     */
    select(selector) {
        return (0, select_1.default)(selector)(this.source);
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Iterable<TResult>}
     */
    selectMany(selector) {
        return (0, selectMany_1.default)(selector)(this.source);
    }
    /**
     * When resolving, skips the number of elements by the count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    skip(count) {
        return this.filter((0, skip_1.default)(count));
    }
    /**
     * When resolving, takes no more than the number of elements by the provided count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    take(count) {
        return this.filter((0, take_1.default)(count));
    }
}
exports.default = LinqBase;
//# sourceMappingURL=LinqBase.js.map