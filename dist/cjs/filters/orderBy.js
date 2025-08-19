"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = orderBy;
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare");
const compare_2 = require("@tsdotnet/compare");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
function orderBy(keySelector, order = compare_2.Order.Ascending) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of (0, toArray_1.default)(sequence).sort((a, b) => compare_1.compare.primitives(keySelector(a), keySelector(b)) * order)) {
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=orderBy.js.map