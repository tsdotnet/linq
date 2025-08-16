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
        define(["require", "exports", "@tsdotnet/exceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = product;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Returns the product (*) of a sequence of numbers.
     * Returns NaN if sequence is empty or if any entries are NaN.
     * @param {Iterable<number>} sequence The sequence of numbers to multiply together.
     * @return {number} The product of the sequence.
     */
    function product(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        let product = 1, hasEntries = false;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            hasEntries = true;
            product *= s;
        }
        return hasEntries ? product : NaN;
    }
});
//# sourceMappingURL=product.js.map