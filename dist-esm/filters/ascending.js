/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import comparePrimitives from '@tsdotnet/compare/dist/comparePrimitives';
import toArray from '../resolutions/toArray';
/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function ascending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray(sequence).sort(comparePrimitives))
                yield e;
        }
    };
}
//# sourceMappingURL=ascending.js.map