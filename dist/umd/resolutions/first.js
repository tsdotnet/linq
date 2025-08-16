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
    exports.default = first;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    /**
     * Returns the first element of a sequence.
     * @param {Iterable<T>} sequence
     * @return {T}
     */
    function first(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array) {
            if (sequence.length != 0)
                return sequence[0];
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            if (!first.done)
                return first.value;
        }
        throw new exceptions_2.InvalidOperationException('The sequence is empty.');
    }
});
//# sourceMappingURL=first.js.map