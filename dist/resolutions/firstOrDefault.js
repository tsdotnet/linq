"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the first element of a sequence, or a the default value if no element is found.
 */
function firstOrDefault(sequence, defaultValue) {
    if (!sequence)
        return defaultValue;
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    return first.done ? defaultValue : first.value;
}
exports.default = firstOrDefault;
//# sourceMappingURL=firstOrDefault.js.map