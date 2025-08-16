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
        define(["require", "exports", "@tsdotnet/compare", "@tsdotnet/exceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = lastIndexOf;
    const compare_1 = require("@tsdotnet/compare");
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
     * @param {T} item
     * @return {IterableTransform<T, number>}
     */
    function lastIndexOf(item) {
        return function (sequence) {
            if (!sequence)
                throw new exceptions_1.ArgumentNullException('sequence');
            if (sequence instanceof Array)
                return sequence.lastIndexOf(item);
            let i = 0, last = -1;
            for (const e of sequence) {
                if ((0, compare_1.areEqual)(e, item))
                    last = i;
                i++;
            }
            return last;
        };
    }
});
//# sourceMappingURL=lastIndexOf.js.map