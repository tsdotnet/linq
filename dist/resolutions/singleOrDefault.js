"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an entry from a singular sequence or a default value if empty.
 * Throws if more than one entry.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
function singleOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array) {
            switch (sequence.length) {
                case 0: return defaultValue;
                case 1: return sequence[0];
            }
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            if (first.done)
                return defaultValue;
            if (iterator.next().done)
                return first.value;
        }
        throw new Error('Sequence contains more than one element.');
    };
}
exports.default = singleOrDefault;
//# sourceMappingURL=singleOrDefault.js.map