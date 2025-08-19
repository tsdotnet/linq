"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = asArray;
const exceptions_1 = require("@tsdotnet/exceptions");
function asArray(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    if (sequence instanceof Array)
        return sequence;
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}
//# sourceMappingURL=asArray.js.map