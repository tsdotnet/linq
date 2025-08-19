"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sequenceEqual;
const compare_1 = require("@tsdotnet/compare");
const compare_2 = require("@tsdotnet/compare");
function sequenceEqual(other, equalityComparer = compare_1.areEqual) {
    return function (sequence) {
        return (0, compare_2.areSequencesEqual)(sequence, other, equalityComparer);
    };
}
//# sourceMappingURL=sequenceEqual.js.map