"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the product (*) of a sequence of numbers.
 * Returns NaN if sequence is empty or if any entries are NaN.
 * @param {Iterable<number>} sequence The sequence of numbers to multiply together.
 * @return {number} The product of the sequence.
 */
function product(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    let product = 1, hasEntries = false;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        hasEntries = true;
        product *= s;
    }
    return hasEntries ? product : NaN;
}
exports.default = product;
//# sourceMappingURL=product.js.map