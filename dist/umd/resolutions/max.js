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
    exports.default = max;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    /**
     * Returns the entry in the sequence that has the highest/greatest value.
     * @param {Iterable<T>} sequence
     * @return {T}
     */
    function max(sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        const i = sequence[Symbol.iterator]();
        let n = i.next();
        if (n.done)
            throw new exceptions_2.InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
        let max = n.value;
        while (!(n = i.next()).done) {
            if (n.value > max)
                max = n.value;
        }
        return max;
    }
});
//# sourceMappingURL=max.js.map