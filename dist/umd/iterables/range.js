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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = range;
    /**
     * Generates a sequence of numbers within a specified range.
     * @param {number} start
     * @param {number} maxInclusive
     * @param {number} step
     * @returns {Iterable<number>}
     */
    function range(start = 0, maxInclusive = Infinity, step = 1) {
        return {
            *[Symbol.iterator]() {
                for (let i = start; i <= maxInclusive; i += step) {
                    yield i;
                }
            }
        };
    }
});
//# sourceMappingURL=range.js.map