/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */ /*
* @author electricessence / https://github.com/electricessence/
* @license MIT
*/
/**
 * An iterable transform that returns the last element of a sequence, or a default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T | undefined>}
 */
export default function lastOrDefault(defaultValue) {
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
//# sourceMappingURL=lastOrDefault.js.map