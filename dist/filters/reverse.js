"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Returns an array (copy) of all the elements of a sequence in reverse order.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function reverse(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    return {
        *[Symbol.iterator]() {
            if (sequence instanceof Array) {
                const len = sequence.length;
                for (let i = len - 1; i >= 0; i--) {
                    if (len !== sequence.length)
                        throw Error('Array length changed during iteration.');
                    yield sequence[i];
                }
                return;
            }
            for (const e of toArray_1.default(sequence).reverse()) {
                yield e;
            }
        }
    };
}
exports.default = reverse;
//# sourceMappingURL=reverse.js.map