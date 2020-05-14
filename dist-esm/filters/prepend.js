/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import concat from '../iterables/concat';
import same from './same';
/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 * @param {T} elements
 * @return {IterableFilter<T>}
 */
export default function prepend(...elements) {
    if (!elements.length)
        return same;
    return function (sequence) {
        return concat(elements, sequence);
    };
}
//# sourceMappingURL=prepend.js.map