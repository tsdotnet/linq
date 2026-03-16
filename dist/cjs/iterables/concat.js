"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = concat;
const tslib_1 = require("tslib");
const merge_js_1 = tslib_1.__importDefault(require("./merge.js"));
function concat(...sequences) {
    return (0, merge_js_1.default)(sequences);
}
//# sourceMappingURL=concat.js.map