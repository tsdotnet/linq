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
        define(["require", "exports", "tslib", "@tsdotnet/exceptions", "@tsdotnet/exceptions", "@tsdotnet/integer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = elementAt;
    const tslib_1 = require("tslib");
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    const integer_1 = tslib_1.__importDefault(require("@tsdotnet/integer"));
    /**
     * Produces a function that returns the element at a specified index in a sequence.
     * @param {number} index
     * @return {IterableTransform<T, T>} A function that when passed a sequence of elements selects the specific element.
     */
    function elementAt(index) {
        integer_1.default.assertZeroOrGreater(index);
        return function (sequence) {
            if (!sequence)
                throw new exceptions_1.ArgumentNullException('sequence');
            let count = 0;
            if (sequence instanceof Array) {
                count = sequence.length;
                if (index < count)
                    return sequence[index];
            }
            else {
                for (const e of sequence) {
                    if (index === count++)
                        return e;
                }
            }
            throw new exceptions_2.ArgumentOutOfRangeException('index', index, 'Exceeds the total number of elements: ' + count);
        };
    }
});
//# sourceMappingURL=elementAt.js.map