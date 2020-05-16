/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Returns an array (copy) of all the elements in a sequence if the sequence isn't already an array.
 * If the sequence is an array, it's returned as is.
 * @param {Iterable<T>} sequence
 * @return {T[]}
 */
export default function asArray(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    if (sequence instanceof Array)
        return sequence;
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}
//# sourceMappingURL=asArray.js.map