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
    exports.default = merge;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * Concatenates the sequences.
     * @param {Iterable<Iterable<T>>} sequences
     * @return {Iterable<T>}
     */
    function merge(sequences) {
        if (!sequences)
            throw new exceptions_1.ArgumentNullException('sequences');
        return {
            *[Symbol.iterator]() {
                for (const s of sequences) {
                    for (const e of s) {
                        yield e;
                    }
                }
            }
        };
    }
});
//# sourceMappingURL=merge.js.map