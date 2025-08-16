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
    exports.default = iterateIndexes;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Returns an iterator that iterates the provided ArrayLike using length and index.
     * @param {ArrayLike<T>} source
     * @return {Iterable<T>}
     */
    function iterateIndexes(source) {
        if (!source)
            throw new exceptions_1.ArgumentNullException('source');
        return {
            *[Symbol.iterator]() {
                const len = source?.length;
                if (len) {
                    for (let i = 0; i < len; i++) {
                        yield source[i];
                    }
                }
            }
        };
    }
});
//# sourceMappingURL=iterateIndexes.js.map