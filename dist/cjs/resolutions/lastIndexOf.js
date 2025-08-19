"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = lastIndexOf;
const compare_1 = require("@tsdotnet/compare");
const exceptions_1 = require("@tsdotnet/exceptions");
function lastIndexOf(item) {
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.lastIndexOf(item);
        let i = 0, last = -1;
        for (const e of sequence) {
            if ((0, compare_1.areEqual)(e, item))
                last = i;
            i++;
        }
        return last;
    };
}
//# sourceMappingURL=lastIndexOf.js.map