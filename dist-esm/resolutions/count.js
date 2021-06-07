/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import aggregate from './aggregate';
const a = aggregate((p) => p + 1, 0);
/**
 * Returns the number of entries in a sequence.
 * @param {Iterable<T>} sequence
 * @return {number}
 */
export default function count(sequence) {
    if (sequence instanceof Array)
        return sequence.length;
    return sequence ? a(sequence) : 0;
}
//# sourceMappingURL=count.js.map