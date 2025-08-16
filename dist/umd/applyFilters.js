/**
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
    exports.default = applyFilters;
    /**
     * Applies  a set of filters to a sequence.
     * @param {Iterable<T>} sequence The sequence to apply to.
     * @param {Iterable<IterableFilter<T>>} filters The filters to apply.
     * @return {Iterable<T>} The resultant sequence.
     */
    function applyFilters(sequence, filters) {
        for (const filter of filters) {
            sequence = filter(sequence);
        }
        return sequence;
    }
});
//# sourceMappingURL=applyFilters.js.map