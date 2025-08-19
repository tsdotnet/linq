"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reverse;
const tslib_1 = require("tslib");
const exceptions_1 = require("@tsdotnet/exceptions");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
function reverse(sequence) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
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
            for (const e of (0, toArray_1.default)(sequence).reverse()) {
                yield e;
            }
        }
    };
}
//# sourceMappingURL=reverse.js.map