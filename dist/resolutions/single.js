"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const InvalidOperationException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/InvalidOperationException"));
/**
 * Returns a single, specific element of a sequence.
 */
function single(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
        throw new InvalidOperationException_1.default('The sequence is empty.');
    if (iterator.next().done)
        return first.value;
    throw new Error('Sequence contains more than one element.');
}
exports.default = single;
//# sourceMappingURL=single.js.map