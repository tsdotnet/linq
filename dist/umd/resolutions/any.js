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
        define(["require", "exports", "tslib", "./isEmpty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = any;
    const tslib_1 = require("tslib");
    const isEmpty_1 = tslib_1.__importDefault(require("./isEmpty"));
    /**
     * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
     * If no predicate is provided, will resolve true if the sequence is not empty.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableTransform<T, boolean>}
     */
    function any(predicate) {
        return function (sequence) {
            if (!sequence)
                return false;
            if (!predicate) {
                // noinspection PointlessBooleanExpressionJS
                return !(0, isEmpty_1.default)(sequence);
            }
            if (sequence instanceof Array)
                return sequence.some(predicate);
            let i = 0;
            for (const e of sequence) {
                if (predicate(e, i++))
                    return true;
            }
            return false;
        };
    }
});
//# sourceMappingURL=any.js.map