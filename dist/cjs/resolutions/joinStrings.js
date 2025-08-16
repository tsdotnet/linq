"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinStrings = joinStrings;
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * Joins a set of strings using the provided separator.
 * @param {string} separator
 * @return {IterableTransform<string, string>}
 */
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