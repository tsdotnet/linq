/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import toArray from '../resolutions/toArray';
/**
 * Orders elements by use of a comparison function.
 * @param {Comparison} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter}
 */
export default function orderUsing(comparison, order = 1 /* Ascending */) {
    if (!comparison)
        throw new ArgumentNullException('comparison');
    return function* (sequence) {
        for (const e of toArray(sequence).sort(order == -1 /* Descending */
            ? ((a, b) => comparison(a, b) * -1)
            : comparison)) {
            yield e;
        }
    };
}
//# sourceMappingURL=orderUsing.js.map