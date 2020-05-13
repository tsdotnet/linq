/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Concatenates the sequences.
 */
export default function* merge(sequences) {
    if (!sequences)
        throw new ArgumentNullException('sequences');
    for (const s of sequences) {
        for (const e of s) {
            yield e;
        }
    }
}
//# sourceMappingURL=merge.js.map