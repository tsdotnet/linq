"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Returns an array (copy) of all the elements of a sequence in reverse order.
 */
function* reverse(sequence) {
    // Placing this inside a generator allows it to be lazy.
    for (const e of toArray_1.default(sequence).reverse()) {
        yield e;
    }
}
exports.default = reverse;
//# sourceMappingURL=reverse.js.map