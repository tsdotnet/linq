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
 * Returns the first element of a sequence.
 */
function first(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
        throw new InvalidOperationException_1.default('The sequence is empty.');
    return first.value;
}
exports.default = first;
//# sourceMappingURL=first.js.map