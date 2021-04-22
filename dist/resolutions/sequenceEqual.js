"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare");
const areSequencesEqual_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/areSequencesEqual"));
/**
 * Resolves true if the sequences are equal.
 * @param {Iterable<T>} other
 * @param {EqualityComparison<T>} equalityComparer
 * @return {IterableTransform<T, boolean>}
 */
function sequenceEqual(other, equalityComparer = compare_1.areEqual) {
    return function (sequence) {
        return areSequencesEqual_1.default(sequence, other, equalityComparer);
    };
}
exports.default = sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map