"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const InvalidOperationException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/InvalidOperationException"));
/**
 * Returns an entry from a singular sequence.
 * Will throw if no elements or more than one.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
function single(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    let hasElements;
    if (sequence instanceof Array) {
        const len = sequence.length;
        hasElements = len !== 0;
        if (len === 1)
            return sequence[0];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        hasElements = !first.done;
        if (hasElements && iterator.next().done)
            return first.value;
    }
    throw new InvalidOperationException_1.default(hasElements
        ? 'Sequence contains more than one element.'
        : 'The sequence is empty.');
}
exports.default = single;
//# sourceMappingURL=single.js.map