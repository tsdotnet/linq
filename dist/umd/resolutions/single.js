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
    exports.default = single;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    /**
     * Returns an entry from a singular sequence.
     * Will throw if no elements or more than one.
     * @param {Iterable<T>} sequence
     * @return {T}
     */
    function single(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        let hasElements;
        if (sequence instanceof Array) {
            const len = sequence.length;
            hasElements = len !== 0;
            if (len === 1)
                return sequence[0];
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            hasElements = !first.done;
            if (hasElements && iterator.next().done)
                return first.value;
        }
        throw new exceptions_2.InvalidOperationException(hasElements
            ? 'Sequence contains more than one element.'
            : 'The sequence is empty.');
    }
});
//# sourceMappingURL=single.js.map