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
    exports.default = same;
    /**
     * Returns the sequence provided.
     * @param {Iterable<T>} sequence
     * @return {Iterable<T>}
     */
    function same(sequence) {
        return sequence;
    }
});
//# sourceMappingURL=same.js.map