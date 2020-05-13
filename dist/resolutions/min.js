"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = void 0;
const tslib_1 = require("tslib");
const ArgumentException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentException"));
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the entry in the sequence that has the lowest/least value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
function min(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new ArgumentException_1.default('sequence', 'Is empty.'); // Use defaultIfEmpty first.
    let min = n.value;
    while (!(n = i.next()).done) {
        if (n.value < min)
            min = n.value;
    }
    return min;
}
exports.min = min;
//# sourceMappingURL=min.js.map