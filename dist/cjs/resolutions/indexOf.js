"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = indexOf;
const compare_1 = require("@tsdotnet/compare");
const exceptions_1 = require("@tsdotnet/exceptions");
function indexOf(entry) {
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.indexOf(entry);
        let i = 0;
        for (const e of sequence) {
            if ((0, compare_1.areEqual)(e, entry))
                return i;
            i++;
        }
        return -1;
    };
}
//# sourceMappingURL=indexOf.js.map