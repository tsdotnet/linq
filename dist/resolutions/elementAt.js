"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const ArgumentOutOfRangeException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentOutOfRangeException"));
const integer_1 = tslib_1.__importDefault(require("@tsdotnet/integer"));
/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
function elementAt(index) {
    integer_1.default.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        throw new ArgumentOutOfRangeException_1.default('index', index, 'Exceeds the total number of elements: ' + count);
    };
}
exports.default = elementAt;
//# sourceMappingURL=elementAt.js.map