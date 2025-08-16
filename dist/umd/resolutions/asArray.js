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
    exports.default = asArray;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Returns an array (copy) of all the elements in a sequence if the sequence isn't already an array.
     * If the sequence is an array, it's returned as is.
     * @param {Iterable<T>} sequence
     * @return {T[]}
     */
    function asArray(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence;
        const result = [];
        for (const e of sequence)
            result.push(e);
        return result;
    }
});
//# sourceMappingURL=asArray.js.map