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
    exports.default = zip;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Produces a sequence that is combination of the two sequences..
     * @param {Iterable<T1>} sequence1
     * @param {Iterable<T2>} sequence2
     * @param {(r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult} selector
     * @return {Iterable<TResult>}
     */
    function zip(sequence1, sequence2, selector) {
        if (!sequence1)
            throw new exceptions_1.ArgumentNullException('sequence1');
        if (!sequence2)
            throw new exceptions_1.ArgumentNullException('sequence2');
        if (!selector)
            throw new exceptions_1.ArgumentNullException('selector');
        return {
            *[Symbol.iterator]() {
                const i1 = sequence1[Symbol.iterator](), i2 = sequence2[Symbol.iterator]();
                let n1 = i1.next(), n2 = i2.next(), i = 0;
                while (!n1.done || !n2.done) {
                    yield selector(n1, n2, i++);
                    n1 = i1.next();
                    n2 = i2.next();
                }
            }
        };
    }
});
//# sourceMappingURL=zip.js.map