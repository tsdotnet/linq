"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sumAndCount;
const exceptions_1 = require("@tsdotnet/exceptions");
function sumAndCount(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return { value: NaN, count: NaN };
        sum += s;
        count++;
    }
    return {
        value: sum,
        count: count
    };
}
//# sourceMappingURL=sumAndCount.js.map