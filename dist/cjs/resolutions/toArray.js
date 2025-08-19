"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toArray;
const exceptions_1 = require("@tsdotnet/exceptions");
function toArray(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    if (sequence instanceof Array)
        return sequence.slice();
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}
//# sourceMappingURL=toArray.js.map