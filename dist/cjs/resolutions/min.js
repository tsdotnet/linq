"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = min;
const exceptions_1 = require("@tsdotnet/exceptions");
const exceptions_2 = require("@tsdotnet/exceptions");
function min(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new exceptions_2.InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
    let min = n.value;
    while (!(n = i.next()).done) {
        if (n.value < min)
            min = n.value;
    }
    return min;
}
//# sourceMappingURL=min.js.map