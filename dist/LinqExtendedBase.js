"use strict";
/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const LinqBase_1 = (0, tslib_1.__importDefault)(require("./LinqBase"));
const where_1 = (0, tslib_1.__importDefault)(require("./filters/where"));
const all_1 = (0, tslib_1.__importDefault)(require("./resolutions/all"));
const any_1 = (0, tslib_1.__importDefault)(require("./resolutions/any"));
const count_1 = (0, tslib_1.__importDefault)(require("./resolutions/count"));
const toArray_1 = (0, tslib_1.__importDefault)(require("./resolutions/toArray"));
const single_1 = (0, tslib_1.__importDefault)(require("./resolutions/single"));
const singleOrDefault_1 = (0, tslib_1.__importDefault)(require("./resolutions/singleOrDefault"));
const first_1 = (0, tslib_1.__importDefault)(require("./resolutions/first"));
const firstOrDefault_1 = (0, tslib_1.__importDefault)(require("./resolutions/firstOrDefault"));
const last_1 = (0, tslib_1.__importDefault)(require("./resolutions/last"));
const lastOrDefault_1 = (0, tslib_1.__importDefault)(require("./resolutions/lastOrDefault"));
class LinqExtendedBase extends LinqBase_1.default {
    constructor(source, create) {
        super(source, create);
    }
    /**
     * Returns all the entries in the sequence as a new array.
     * @return {T[]}
     */
    toArray() {
        return (0, toArray_1.default)(this.source);
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
            ? (0, count_1.default)((0, where_1.default)(predicate)(this.source))
            : (0, count_1.default)(this.source);
    }
    /**
     * Returns true if the predicate ever returns true. Otherwise false.
     * If no predicate is provided, returns true if the sequence has any entries.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    any(predicate) {
        return (0, any_1.default)(predicate)(this.source);
    }
    /**
     * Returns false if the predicate ever returns false. Otherwise true.
     * @param {PredicateWithIndex<T>} predicate
     * @return {boolean}
     */
    all(predicate) {
        return (0, all_1.default)(predicate)(this.source);
    }
    /**
     * Returns the expected single element; otherwise throws an InvalidOperationException.
     */
    single() {
        return (0, single_1.default)(this.source);
    }
    singleOrDefault(defaultValue) {
        return (0, singleOrDefault_1.default)(defaultValue)(this.source);
    }
    /**
     * Returns the first element of a sequence.
     */
    first() {
        return (0, first_1.default)(this.source);
    }
    firstOrDefault(defaultValue) {
        return (0, firstOrDefault_1.default)(defaultValue)(this.source);
    }
    /**
     * Returns the last element of a sequence.
     */
    last() {
        return (0, last_1.default)(this.source);
    }
    lastOrDefault(defaultValue) {
        return (0, lastOrDefault_1.default)(defaultValue)(this.source);
    }
}
exports.default = LinqExtendedBase;
//# sourceMappingURL=LinqExtendedBase.js.map