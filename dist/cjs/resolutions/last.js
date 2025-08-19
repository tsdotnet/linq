"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = last;
const exceptions_1 = require("@tsdotnet/exceptions");
const exceptions_2 = require("@tsdotnet/exceptions");
function last(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    if (sequence instanceof Array) {
        if (sequence.length != 0)
            return sequence[sequence.length - 1];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        let next = iterator.next();
        if (!next.done) {
            let last;
            do {
                last = next.value;
                next = iterator.next();
            } while (!next.done);
            return last;
        }
    }
    throw new exceptions_2.InvalidOperationException('The sequence is empty.');
}
//# sourceMappingURL=last.js.map