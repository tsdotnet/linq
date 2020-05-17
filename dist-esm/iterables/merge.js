/**
 * @packageDocumentation
 * @module iterables
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Concatenates the sequences.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
export default function merge(sequences) {
    if (!sequences)
        throw new ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            for (const s of sequences) {
                for (const e of s) {
                    yield e;
                }
            }
        }
    };
}
//# sourceMappingURL=merge.js.map