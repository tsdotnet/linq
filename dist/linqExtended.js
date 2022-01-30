"use strict";
/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinqGrouping = exports.LinqExtended = void 0;
const tslib_1 = require("tslib");
const groupBy_1 = (0, tslib_1.__importDefault)(require("./transforms/groupBy"));
const select_1 = (0, tslib_1.__importDefault)(require("./transforms/select"));
const selectMany_1 = (0, tslib_1.__importDefault)(require("./transforms/selectMany"));
const LinqExtendedBase_1 = (0, tslib_1.__importDefault)(require("./LinqExtendedBase"));
/**
 * Extended version of `Linq<T>` that includes common LINQ methods like `.where()` and `.select()` and `.groupBy()`.
 */
class LinqExtended extends LinqExtendedBase_1.default {
    constructor(source) {
        super(source, source => new LinqExtended(source));
        this.source = source;
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filter(filter) {
        return super.filter(filter);
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {LinqExtended<TResult>}
     */
    transform(transform) {
        return new LinqExtended(transform(this.source));
    }
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {LinqExtended<TResult>}
     */
    select(selector) {
        return this.transform((0, select_1.default)(selector));
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {LinqExtended<TResult>}
     */
    selectMany(selector) {
        return this.transform((0, selectMany_1.default)(selector));
    }
    /**
     * Groups entries together by selected key.
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @return {LinqExtended<Grouping<TKey, T>>}
     */
    groupBy(keySelector) {
        return this
            .transform((0, groupBy_1.default)(keySelector))
            .select(g => new LinqGrouping(g));
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