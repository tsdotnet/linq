/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import integer from '@tsdotnet/integer';
/**
 * Produces a function that returns the element at a specified index in a sequence or a default value if out of bounds.
 * @param {number} index
 * @param {T} defaultValue The optional default value to use if the element is not found.
 * @return {IterableTransform<T, T | undefined>} A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAtOrDefault(index, defaultValue) {
    integer.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array)
            return index < sequence.length ? sequence[index] : defaultValue;
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        return defaultValue;
    };
}
//# sourceMappingURL=elementAtOrDefault.js.map