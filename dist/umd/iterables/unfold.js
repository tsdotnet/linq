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
    exports.default = unfold;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * A generator function for creating entries based upon the previous entry.
     * @param {T} seed The first value to be fed the valueFactory.
     * @param {SelectorWithIndex<T, T>} valueFactory
     * @param {boolean} skipSeed If false (default), the seed value is the first value returned.  Otherwise it is skipped.
     * @return {Iterable<T>}
     */
    function unfold(seed, valueFactory, skipSeed = false) {
        if (!valueFactory)
            throw new exceptions_1.ArgumentNullException('valueFactory');
        return {
            *[Symbol.iterator]() {
                if (!skipSeed)
                    yield seed;
                let value = seed, i = skipSeed ? 0 : 1;
                while (true) {
                    value = valueFactory(value, i++);
                    yield value;
                }
            }
        };
    }
});
//# sourceMappingURL=unfold.js.map