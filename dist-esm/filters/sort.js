/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import comparePrimitives from '@tsdotnet/compare/dist/comparePrimitives';
import toArray from '../resolutions/toArray';
/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export function* ascending(sequence) {
    for (const e of toArray(sequence).sort(comparePrimitives))
        yield e;
}
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export function* descending(sequence) {
    for (const e of toArray(sequence).sort(comparePrimitives.inverted))
        yield e;
}
//# sourceMappingURL=sort.js.map