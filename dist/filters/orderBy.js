"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const comparePrimitives_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/comparePrimitives"));
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
function orderBy(keySelector, order = 1 /* Ascending */) {
    return function* (sequence) {
        for (const e of toArray_1.default(sequence).sort((a, b) => comparePrimitives_1.default(keySelector(a), keySelector(b)) * order)) {
            yield e;
        }
    };
}
exports.default = orderBy;
//# sourceMappingURL=orderBy.js.map