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
    exports.default = sum;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Returns the sum (+) of a sequence of numbers.
     * Returns 0 if sequence is empty.  Returns NaN if any entries are NaN.
     * @param {Iterable<number>} sequence The sequence of numbers to sum (add+ together).
     * @return {number} The sum of the sequence.
     */
    function sum(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        let sum = 0;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            sum += s;
        }
        return sum;
    }
});
//# sourceMappingURL=sum.js.map