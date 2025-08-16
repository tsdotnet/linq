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
    exports.default = aggregate;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const exceptions_2 = require("@tsdotnet/exceptions");
    /**
     * An iterable transform that applies an accumulator function over a sequence.
     * The specified `initialValue` is used as the initial accumulator value, and the specified function is used to select the result value.
     * If no `initialValue` is specified, the first entry in the sequence is used.
     * @param {(previous: (U | undefined), current: T, index: number) => U} reducer
     * @param {U} initialValue
     * @return {IterableTransform<T, U | undefined>}
     */
    function aggregate(reducer, initialValue) {
        return function (sequence) {
            if (!sequence)
                throw new exceptions_1.ArgumentNullException('sequence');
            let i = 0;
            if (initialValue === undefined) {
                const iterator = sequence[Symbol.iterator]();
                let n = iterator.next();
                if (n.done)
                    throw new exceptions_2.InvalidOperationException('Sequence is empty.  Specify an initial value allow for an empty iterable.');
                let previous = n.value;
                while (!(n = iterator.next()).done) {
                    previous = reducer(previous, n.value, ++i);
                }
                return previous;
            }
            else {
                let previous = initialValue;
                for (const current of sequence)
                    previous = reducer(previous, current, i++);
                return previous;
            }
        };
    }
});
//# sourceMappingURL=aggregate.js.map