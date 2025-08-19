"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = orderUsing;
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare");
const exceptions_1 = require("@tsdotnet/exceptions");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
function orderUsing(comparison, order = compare_1.Order.Ascending) {
    if (!comparison)
        throw new exceptions_1.ArgumentNullException('comparison');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of (0, toArray_1.default)(sequence).sort(order == compare_1.Order.Descending
                    ? ((a, b) => comparison(a, b) * -1)
                    : comparison)) {
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=orderUsing.js.map