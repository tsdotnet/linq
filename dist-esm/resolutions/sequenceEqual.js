/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { areEqual } from '@tsdotnet/compare';
import areSequencesEqual from '@tsdotnet/compare/dist/areSequencesEqual';
/**
 * Resolves true if the sequences are equal.
 * @param {Iterable<T>} other
 * @param {EqualityComparison<T>} equalityComparer
 * @return {IterableTransform<T, boolean>}
 */
export default function sequenceEqual(other, equalityComparer = areEqual) {
    return function (sequence) {
        return areSequencesEqual(sequence, other, equalityComparer);
    };
}
//# sourceMappingURL=sequenceEqual.js.map