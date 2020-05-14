/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import concat from '../iterables/concat';
import same from './same';
/*
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
export default function append(...elements) {
    if (!elements.length)
        return same;
    return function (sequence) {
        return concat(sequence, elements);
    };
}
//# sourceMappingURL=append.js.map