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
    exports.default = where;
    /**
     * An iterable filter that only returns elements that match the provided predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {IterableFilter<T>}
     */
    function where(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const e of sequence) {
                        if (predicate(e, i++))
                            yield e;
                    }
                }
            };
        };
    }
});
//# sourceMappingURL=where.js.map