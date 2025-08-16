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
        define(["require", "exports", "tslib", "@tsdotnet/exceptions", "../resolutions/toArray"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = orderUsing;
    const tslib_1 = require("tslib");
    const exceptions_1 = require("@tsdotnet/exceptions");
    const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
    /**
     * An iterable filter that orders elements by use of a comparison function.
     * @param {Comparison<T>} comparison The function to decide if elements are greater, lesser or equal.
     * @param {Order} order Default is ascending.
     * @return {IterableFilter<T>}
     */
    function orderUsing(comparison, order = 1 /* Order.Ascending */) {
        if (!comparison)
            throw new exceptions_1.ArgumentNullException('comparison');
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    for (const e of (0, toArray_1.default)(sequence).sort(order == -1 /* Order.Descending */
                        ? ((a, b) => comparison(a, b) * -1)
                        : comparison)) {
                        yield e;
                    }
                }
            };
        };
    }
});
//# sourceMappingURL=orderUsing.js.map