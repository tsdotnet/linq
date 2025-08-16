/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { compare } from '@tsdotnet/compare';
import toArray from '../resolutions/toArray';
/**
 * An iterable filter that orders elements by a primitive value provided by the key selector.
 * @param {Selector<T, TKey>} keySelector
 * @param {Order} order
 * @return {IterableFilter<T>}
 */
export default function orderBy(keySelector, order = 1 /* Order.Ascending */) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort((a, b) => compare.primitives(keySelector(a), keySelector(b)) * order)) {
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=orderBy.js.map