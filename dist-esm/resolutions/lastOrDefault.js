/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import aggregate from './aggregate';
const a = aggregate((p, c) => c);
/**
 * Returns the last element of a sequence, or a default value if no element is found.
 * @param {Iterable<T>} sequence
 * @param {T} defaultValue
 * @return {T | undefined}
 */
export default function lastOrDefault(sequence, defaultValue) {
    if (!sequence)
        return defaultValue;
    if (sequence instanceof Array) {
        return sequence.length
            ? sequence[sequence.length - 1]
            : defaultValue;
    }
    return defaultValue === undefined
        ? a(sequence)
        : aggregate((p, c) => c, defaultValue)(sequence);
}
//# sourceMappingURL=lastOrDefault.js.map