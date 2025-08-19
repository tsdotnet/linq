"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sum;
const exceptions_1 = require("@tsdotnet/exceptions");
function sum(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    let sum = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
    }
    return sum;
}
//# sourceMappingURL=sum.js.map