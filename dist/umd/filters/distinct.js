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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = distinct;
    /**
     * An iterable filter that returns distinct elements from a sequence.
     * @param {Iterable<T>} sequence
     * @return {Iterable<T>}
     */
    function distinct(sequence) {
        return {
            *[Symbol.iterator]() {
                const s = new Set();
                for (const e of sequence) {
                    if (s.has(e))
                        continue;
                    s.add(e);
                    yield e;
                }
                s.clear();
            }
        };
    }
});
//# sourceMappingURL=distinct.js.map