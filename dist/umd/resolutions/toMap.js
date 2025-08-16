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
        define(["require", "exports", "tslib", "@tsdotnet/exceptions", "../identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = toMap;
    const tslib_1 = require("tslib");
    const exceptions_1 = require("@tsdotnet/exceptions");
    const identity_1 = tslib_1.__importDefault(require("../identity"));
    /**
     * Returns a map of all elements .
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @param valueSelector
     * @param {MappingMode} mappingBehavior
     * @return {IterableTransform<T, Map<TKey, TValue>>}
     */
    function toMap(keySelector, valueSelector = identity_1.default, mappingBehavior = -1 /* MappingMode.Throw */) {
        if (!keySelector)
            throw new exceptions_1.ArgumentNullException('keySelector');
        if (typeof valueSelector == 'number') {
            mappingBehavior = valueSelector;
            valueSelector = undefined;
        }
        if (!valueSelector)
            valueSelector = identity_1.default; // in case the user uses null as a default.
        return function (sequence) {
            const result = new Map();
            let i = 0;
            for (const e of sequence) {
                const key = keySelector(e, i++);
                if (result.has(key))
                    switch (mappingBehavior) {
                        case 0 /* MappingMode.Keep */:
                            continue;
                        case -1 /* MappingMode.Throw */:
                            throw new Error('MappingMode.Throw: more than one of the same key encountered.');
                    }
                result.set(key, valueSelector(e, i - 1));
            }
            return result;
        };
    }
});
//# sourceMappingURL=toMap.js.map