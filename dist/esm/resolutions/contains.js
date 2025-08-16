/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import indexOf from './indexOf';
/**
 * An iterable transform that resolves true if the provided sequence contains the entry. Otherwise false.
 * @param {T} entry
 * @return {IterableTransform<T, boolean>}
 */
export default function contains(entry) {
    return function (sequence) {
        return indexOf(entry)(sequence) !== -1;
    };
}
//# sourceMappingURL=contains.js.map