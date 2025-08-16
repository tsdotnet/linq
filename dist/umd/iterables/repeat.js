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
    exports.default = repeat;
    /**
     * Generates a sequence that contains one repeated value.
     * @param {T} entry
     * @param {number} count The number of times to repeat.
     * @return {Iterable<T>}
     */
    function repeat(entry, count) {
        return {
            *[Symbol.iterator]() {
                for (let i = 0; i < count; i++)
                    yield entry;
            }
        };
    }
});
//# sourceMappingURL=repeat.js.map