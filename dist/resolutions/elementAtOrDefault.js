"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const integer_1 = tslib_1.__importDefault(require("@tsdotnet/integer"));
/*
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @param defaultValue The optional default value to use if the element is not found.
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
function elementAtOrDefault(index, defaultValue) {
    integer_1.default.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        return defaultValue;
    };
}
exports.default = elementAtOrDefault;
//# sourceMappingURL=elementAtOrDefault.js.map