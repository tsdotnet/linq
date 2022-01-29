"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */ /*
* @author electricessence / https://github.com/electricessence/
* @license MIT
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable transform that returns the last element of a sequence, or a default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
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
exports.default = lastOrDefault;
//# sourceMappingURL=lastOrDefault.js.map