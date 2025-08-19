"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = product;
const exceptions_1 = require("@tsdotnet/exceptions");
function product(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    let product = 1, hasEntries = false;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        hasEntries = true;
        product *= s;
    }
    return hasEntries ? product : NaN;
}
//# sourceMappingURL=product.js.map