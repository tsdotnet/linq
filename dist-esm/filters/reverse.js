/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import toArray from '../resolutions/toArray';
/**
 * Returns an array (copy) of all the elements of a sequence in reverse order.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function reverse(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    return {
        *[Symbol.iterator]() {
            for (const e of toArray(sequence).reverse()) {
                yield e;
            }
        }
    };
}
//# sourceMappingURL=reverse.js.map