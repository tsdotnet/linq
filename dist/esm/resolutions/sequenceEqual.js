import { areEqual, areSequencesEqual } from '@tsdotnet/compare';

function sequenceEqual(other, equalityComparer = areEqual) {
    return function (sequence) {
        return areSequencesEqual(sequence, other, equalityComparer);
    };
}

export { sequenceEqual as default };
//# sourceMappingURL=sequenceEqual.js.map
