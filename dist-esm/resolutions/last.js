/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
/**
 * Returns the first element of a sequence.
 */
export default function last(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const iterator = sequence[Symbol.iterator]();
    let next = iterator.next();
    if (next.done)
        throw new InvalidOperationException('The sequence is empty.');
    let last;
    do {
        last = next.value;
        next = iterator.next();
    } while (!next.done);
    return last;
}
//# sourceMappingURL=last.js.map