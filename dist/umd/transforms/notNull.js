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
    exports.default = notNull;
    /**
     * Filters out null values.
     * @param {Iterable<T>} sequence
     * @return {Iterable<NotNull<T>>}
     */
    function notNull(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    if (e !== null)
                        yield e;
            }
        };
    }
});
//# sourceMappingURL=notNull.js.map