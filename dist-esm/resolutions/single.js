/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
/**
 * Returns a single, specific element of a sequence.
 */
export default function single(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
        throw new InvalidOperationException('The sequence is empty.');
    if (iterator.next().done)
        return first.value;
    throw new Error('Sequence contains more than one element.');
}
//# sourceMappingURL=single.js.map