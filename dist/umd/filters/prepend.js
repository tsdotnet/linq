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
        define(["require", "exports", "tslib", "../iterables/concat", "./same"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = prepend;
    const tslib_1 = require("tslib");
    const concat_1 = tslib_1.__importDefault(require("../iterables/concat"));
    const same_1 = tslib_1.__importDefault(require("./same"));
    /**
     * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
     * @param {T} elements
     * @return {IterableFilter<T>}
     */
    function prepend(...elements) {
        if (elements.length === 0)
            return same_1.default;
        return function (sequence) {
            return (0, concat_1.default)(elements, sequence);
        };
    }
});
//# sourceMappingURL=prepend.js.map