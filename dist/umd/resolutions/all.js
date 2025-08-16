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
    exports.default = all;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableTransform<T, boolean>}
     */
    function all(predicate) {
        if (!predicate)
            throw new exceptions_1.ArgumentNullException('predicate');
        return function (sequence) {
            if (!sequence)
                throw new exceptions_1.ArgumentNullException('sequence');
            if (sequence instanceof Array)
                return sequence.every(predicate);
            let i = 0;
            for (const e of sequence) {
                if (!predicate(e, i++))
                    return false;
            }
            return true;
        };
    }
});
//# sourceMappingURL=all.js.map