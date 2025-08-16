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
    exports.default = lastOrDefault;
    /**
     * An iterable transform that returns the last element of a sequence, or a default value if no element is found.
     * @param {TDefault} defaultValue
     * @return {IterableTransform<T, T | TDefault | undefined>}
     */
    function lastOrDefault(defaultValue) {
        return function (sequence) {
            if (!sequence)
                return defaultValue;
            if (sequence instanceof Array) {
                return sequence.length == 0
                    ? defaultValue
                    : sequence[sequence.length - 1];
            }
            let last = defaultValue;
            for (const current of sequence)
                last = current;
            return last;
        };
    }
});
//# sourceMappingURL=lastOrDefault.js.map