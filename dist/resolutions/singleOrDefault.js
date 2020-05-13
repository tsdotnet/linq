"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a single, specific element of a sequence, or a default value if that element is not found.
 */
function singleOrDefault(sequence, defaultValue) {
    if (!sequence)
        return defaultValue;
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
        return defaultValue;
    if (iterator.next().done)
        return first.value;
    throw new Error('Sequence contains more than one element.');
}
exports.default = singleOrDefault;
//# sourceMappingURL=singleOrDefault.js.map