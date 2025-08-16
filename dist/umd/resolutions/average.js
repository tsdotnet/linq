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
        define(["require", "exports", "@tsdotnet/exceptions", "@tsdotnet/exceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = average;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    /**
     * Returns the average of a sequence of numbers.
     * @param {Iterable<number>} sequence
     * @return {number}
     */
    function average(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        let sum = 0, count = 0;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            sum += s;
            count++;
        }
        if (count === 0)
            throw new exceptions_2.InvalidOperationException('Sequence is empty.');
        return sum / count;
    }
});
//# sourceMappingURL=average.js.map