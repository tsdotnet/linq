/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import areEqual from '@tsdotnet/compare/dist/areEqual';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param item The item to look for.
 * @return {IterableTransform} The transform that will look for the provided item.
 */
export default function contains(item) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        for (const e of sequence) {
            if (areEqual(e, item))
                return true;
        }
        return false;
    };
}
//# sourceMappingURL=contains.js.map