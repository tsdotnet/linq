/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@tsdotnet/compare", "../resolutions/toArray"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = orderBy;
    const tslib_1 = require("tslib");
    const compare_1 = require("@tsdotnet/compare");
    const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
    /**
     * An iterable filter that orders elements by a primitive value provided by the key selector.
     * @param {Selector<T, TKey>} keySelector
     * @param {Order} order
     * @return {IterableFilter<T>}
     */
    function orderBy(keySelector, order = 1 /* Order.Ascending */) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    for (const e of (0, toArray_1.default)(sequence).sort((a, b) => compare_1.compare.primitives(keySelector(a), keySelector(b)) * order)) {
                        yield e;
                    }
                }
            };
        };
    }
});
//# sourceMappingURL=orderBy.js.map