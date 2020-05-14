/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns an entry from a singular sequence or a default value if empty.
 * Throws if more than one entry.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array) {
            if (sequence.length < 2)
                return sequence.length ? sequence[0] : defaultValue;
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
//# sourceMappingURL=singleOrDefault.js.map