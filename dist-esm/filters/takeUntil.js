/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import takeWhile from './takeWhile';
/**
 * An iterable filter that will return results until the predicate condition is true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function takeUntil(predicate) {
    return takeWhile((e, i) => !predicate(e, i));
}
//# sourceMappingURL=takeUntil.js.map