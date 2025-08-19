"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = average;
const exceptions_1 = require("@tsdotnet/exceptions");
const exceptions_2 = require("@tsdotnet/exceptions");
function average(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
        count++;
    }
    if (count === 0)
        throw new exceptions_2.InvalidOperationException('Sequence is empty.');
    return sum / count;
}
//# sourceMappingURL=average.js.map