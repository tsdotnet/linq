/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import skipWhile from './skipWhile';
/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function skipUntil(predicate) {
    return skipWhile((e, i) => !predicate(e, i));
}
//# sourceMappingURL=skipUntil.js.map