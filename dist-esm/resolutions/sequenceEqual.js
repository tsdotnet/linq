/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { areEqual } from '@tsdotnet/compare';
import areSequencesEqual from '@tsdotnet/compare/dist/areSequencesEqual';
export default function sequenceEqual(other, equalityComparer = areEqual) {
    return function (sequence) {
        return areSequencesEqual(sequence, other, equalityComparer);
    };
}
//# sourceMappingURL=sequenceEqual.js.map