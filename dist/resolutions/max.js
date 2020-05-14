"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentException"));
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the entry in the sequence that has the highest/greatest value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
function max(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new ArgumentException_1.default('sequence', 'Is empty.'); // Use defaultIfEmpty first.
    let max = n.value;
    while (!(n = i.next()).done) {
        if (n.value > max)
            max = n.value;
    }
    return max;
}
exports.default = max;
//# sourceMappingURL=max.js.map