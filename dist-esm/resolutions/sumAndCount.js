/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Returns the sum (.value) of a sequence and the number of entries (.count).
 * @param {Iterable<number>} sequence The sequence of numbers to sum and count.
 * @return {{value: number; count: number}} The result.
 */
export default function sumAndCount(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return { value: NaN, count: NaN };
        sum += s;
        count++;
    }
    return {
        value: sum,
        count: count
    };
}
//# sourceMappingURL=sumAndCount.js.map