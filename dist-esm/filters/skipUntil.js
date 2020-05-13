/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import skipWhile from './skipWhile';
/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 */
export default function skipUntil(predicate) {
    return skipWhile((e, i) => !predicate(e, i));
}
//# sourceMappingURL=skipUntil.js.map