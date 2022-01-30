/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
/**
 * Returns an entry from a singular sequence.
 * Will throw if no elements or more than one.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function single(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let hasElements;
    if (sequence instanceof Array) {
        const len = sequence.length;
        hasElements = len !== 0;
        if (len === 1)
            return sequence[0];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        hasElements = !first.done;
        if (hasElements && iterator.next().done)
            return first.value;
    }
    throw new InvalidOperationException(hasElements
        ? 'Sequence contains more than one element.'
        : 'The sequence is empty.');
}
//# sourceMappingURL=single.js.map