"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const identity_1 = tslib_1.__importDefault(require("../identity"));
/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param valueSelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, TValue>>}
 */
function toMap(keySelector, valueSelector = identity_1.default, mappingBehavior = -1 /* Throw */) {
    if (!keySelector)
        throw new ArgumentNullException_1.default('keySelector');
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
                    case 0 /* Keep */:
                        continue;
                    case -1 /* Throw */:
                        throw new Error('MappingMode.Throw: more than one of the same key encountered.');
                }
            result.set(key, valueSelector(e, i - 1));
        }
        return result;
    };
}
exports.default = toMap;
//# sourceMappingURL=toMap.js.map