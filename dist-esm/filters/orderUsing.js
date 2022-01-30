/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import toArray from '../resolutions/toArray';
/**
 * An iterable filter that orders elements by use of a comparison function.
 * @param {Comparison<T>} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter<T>}
 */
export default function orderUsing(comparison, order = 1 /* Ascending */) {
    if (!comparison)
        throw new ArgumentNullException('comparison');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort(order == -1 /* Descending */
                    ? ((a, b) => comparison(a, b) * -1)
                    : comparison)) {
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=orderUsing.js.map