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
const InvalidOperationException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/InvalidOperationException"));
/**
 * Returns the average of a sequence of numbers.
 * @param {Iterable<number>} sequence
 * @return {number}
 */
function average(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
        count++;
    }
    if (count === 0)
        throw new InvalidOperationException_1.default('Sequence is empty.');
    return sum / count;
}
exports.default = average;
//# sourceMappingURL=average.js.map