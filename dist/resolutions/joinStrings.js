"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinStrings = void 0;
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
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
            throw new ArgumentNullException_1.default('sequence');
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
exports.joinStrings = joinStrings;
//# sourceMappingURL=joinStrings.js.map