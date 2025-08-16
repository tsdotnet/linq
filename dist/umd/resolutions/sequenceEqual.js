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
        define(["require", "exports", "@tsdotnet/compare", "@tsdotnet/compare"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = sequenceEqual;
    const compare_1 = require("@tsdotnet/compare");
    const compare_2 = require("@tsdotnet/compare");
    /**
     * Resolves true if the sequences are equal.
     * @param {Iterable<T>} other
     * @param {EqualityComparison<T>} equalityComparer
     * @return {IterableTransform<T, boolean>}
     */
    function sequenceEqual(other, equalityComparer = compare_1.areEqual) {
        return function (sequence) {
            return (0, compare_2.areSequencesEqual)(sequence, other, equalityComparer);
        };
    }
});
//# sourceMappingURL=sequenceEqual.js.map