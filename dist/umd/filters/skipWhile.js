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
    exports.default = skipWhile;
    /**
     * An iterable filter that bypasses elements in sequence while the predicate condition is true and if false will iterate the rest.
     * Inverse of skipUntil.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableFilter<T>}
     */
    function skipWhile(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0, skipped = false;
                    for (const e of sequence) {
                        if (skipped || !predicate(e, i)) {
                            skipped = true;
                            yield e;
                        }
                        i++;
                    }
                }
            };
        };
    }
});
//# sourceMappingURL=skipWhile.js.map