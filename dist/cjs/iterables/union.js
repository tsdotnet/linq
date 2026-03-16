"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = union;
const tslib_1 = require("tslib");
const distinct_js_1 = tslib_1.__importDefault(require("../filters/distinct.js"));
const merge_js_1 = tslib_1.__importDefault(require("./merge.js"));
function union(...sequences) {
    return (0, distinct_js_1.default)((0, merge_js_1.default)(sequences));
}
//# sourceMappingURL=union.js.map