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
        define(["require", "exports", "tslib", "./skipWhile"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = skipUntil;
    const tslib_1 = require("tslib");
    const skipWhile_1 = tslib_1.__importDefault(require("./skipWhile"));
    /**
     * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
     * Inverse of skipWhile.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableFilter<T>}
     */
    function skipUntil(predicate) {
        return (0, skipWhile_1.default)((e, i) => !predicate(e, i));
    }
});
//# sourceMappingURL=skipUntil.js.map