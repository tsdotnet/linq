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
    exports.default = takeWhile;
    /**
     * An iterable filter that will return results while the predicate condition is true and stops when false.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableFilter<T>}
     */
    function takeWhile(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const e of sequence) {
                        if (!predicate(e, i++))
                            break;
                        yield e;
                    }
                }
            };
        };
    }
});
//# sourceMappingURL=takeWhile.js.map