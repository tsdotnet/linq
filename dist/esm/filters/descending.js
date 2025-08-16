/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { compare } from '@tsdotnet/compare';
import toArray from '../resolutions/toArray';
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function descending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray(sequence).sort(compare.primitives.inverted))
                yield e;
        }
    };
}
//# sourceMappingURL=descending.js.map