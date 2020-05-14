/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentException from '@tsdotnet/exceptions/dist/ArgumentException';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Returns the entry in the sequence that has the lowest/least value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function min(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new ArgumentException('sequence', 'Is empty.'); // Use defaultIfEmpty first.
    let min = n.value;
    while (!(n = i.next()).done) {
        if (n.value < min)
            min = n.value;
    }
    return min;
}
//# sourceMappingURL=min.js.map