"use strict";
/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable transform that returns the first element of a sequence, or a default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
function firstOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array)
            return sequence.length ? sequence[0] : defaultValue;
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        return first.done ? defaultValue : first.value;
    };
}
exports.default = firstOrDefault;
//# sourceMappingURL=firstOrDefault.js.map