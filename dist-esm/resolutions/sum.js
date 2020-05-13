/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Returns the sum (+) of a sequence of numbers.
 * @param {Iterable} sequence The sequence of numbers to sum (add+ together).
 * @return The sum of the sequence.
 */
export function sum(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let sum = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
    }
    return sum;
}
//# sourceMappingURL=sum.js.map