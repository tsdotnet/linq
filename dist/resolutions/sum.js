"use strict";
/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the sum (+) of a sequence of numbers.
 * Returns 0 if sequence is empty.  Returns NaN if any entries are NaN.
 * @param {Iterable<number>} sequence The sequence of numbers to sum (add+ together).
 * @return {number} The sum of the sequence.
 */
function sum(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    let sum = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
    }
    return sum;
}
exports.default = sum;
//# sourceMappingURL=sum.js.map