"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = all;
const exceptions_1 = require("@tsdotnet/exceptions");
function all(predicate) {
    if (!predicate)
        throw new exceptions_1.ArgumentNullException('predicate');
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.every(predicate);
        let i = 0;
        for (const e of sequence) {
            if (!predicate(e, i++))
                return false;
        }
        return true;
    };
}
//# sourceMappingURL=all.js.map