"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinStrings = joinStrings;
const exceptions_1 = require("@tsdotnet/exceptions");
function joinStrings(separator = '') {
    if (separator == null)
        separator = '';
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        const i = sequence[Symbol.iterator]();
        let n = i.next();
        if (n.done)
            return '';
        let result = '' + n.value;
        while (!(n = i.next()).done) {
            result += separator + n.value;
        }
        return result;
    };
}
//# sourceMappingURL=joinStrings.js.map