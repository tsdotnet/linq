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
    exports.default = defaultIfEmpty;
    /**
     * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
     * @param {T} defaultValue
     * @return {IterableFilter<T>}
     */
    function defaultIfEmpty(defaultValue) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let hasElements = false;
                    for (const e of sequence) {
                        hasElements = true;
                        yield e;
                    }
                    if (!hasElements)
                        yield defaultValue;
                }
            };
        };
    }
});
//# sourceMappingURL=defaultIfEmpty.js.map