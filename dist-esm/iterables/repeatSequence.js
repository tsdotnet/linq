/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Generates a sequence that contains each value in the provided sequence and repeats.
 * @param {Iterable<T>} sequence The sequence to repeat.
 * @param {number} count The number of times to repeat the sequence.
 * @return {Iterable<T>}
 */
export default function repeatSequence(sequence, count) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++) {
                for (const e of sequence) {
                    yield e;
                }
            }
        }
    };
}
//# sourceMappingURL=repeatSequence.js.map