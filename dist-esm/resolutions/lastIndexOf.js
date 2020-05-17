/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import areEqual from '@tsdotnet/compare/dist/areEqual';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} item
 * @return {IterableTransform<T, number>}
 */
export default function lastIndexOf(item) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.lastIndexOf(item);
        let i = 0, last = -1;
        for (const e of sequence) {
            if (areEqual(e, item))
                last = i;
            i++;
        }
        return last;
    };
}
//# sourceMappingURL=lastIndexOf.js.map