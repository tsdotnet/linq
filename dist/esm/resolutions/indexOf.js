/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { areEqual } from '@tsdotnet/compare';
import { ArgumentNullException } from '@tsdotnet/exceptions';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} entry The item to look for.
 * @return {IterableTransform<T, number>} The transform that will look for the provided item.
 */
export default function indexOf(entry) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.indexOf(entry);
        let i = 0;
        for (const e of sequence) {
            if (areEqual(e, entry))
                return i;
            i++;
        }
        return -1;
    };
}
//# sourceMappingURL=indexOf.js.map