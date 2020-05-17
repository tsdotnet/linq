/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function all(predicate) {
    if (!predicate)
        throw new ArgumentNullException('predicate');
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.every(predicate);
        let i = 0;
        for (const e of sequence) {
            if (!predicate(e, i++))
                return false;
        }
        return true;
    };
}
//# sourceMappingURL=all.js.map