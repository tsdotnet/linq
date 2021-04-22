/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import isEmpty from './isEmpty';
/**
 * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
 * If no predicate is provided, will resolve true if the sequence is not empty.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function any(predicate) {
    return function (sequence) {
        if (!sequence)
            return false;
        if (!predicate) {
            // noinspection PointlessBooleanExpressionJS
            return !isEmpty(sequence);
        }
        if (sequence instanceof Array)
            return sequence.some(predicate);
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                return true;
        }
        return false;
    };
}
//# sourceMappingURL=any.js.map