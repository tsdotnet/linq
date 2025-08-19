"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ascending;
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
function ascending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of (0, toArray_1.default)(sequence).sort(compare_1.compare.primitives))
                yield e;
        }
    };
}
//# sourceMappingURL=ascending.js.map