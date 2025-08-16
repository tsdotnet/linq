/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import merge from './merge';
/**
 * Concatenates the provided sequences.
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
export default function concat(...sequences) {
    return merge(sequences);
}
//# sourceMappingURL=concat.js.map