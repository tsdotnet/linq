"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns an array (copy) of all the elements in a sequence.
 */
function toArray(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}
exports.default = toArray;
//# sourceMappingURL=toArray.js.map