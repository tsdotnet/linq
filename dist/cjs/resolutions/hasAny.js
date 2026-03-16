"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hasAny;
const tslib_1 = require("tslib");
const isEmpty_js_1 = tslib_1.__importDefault(require("./isEmpty.js"));
function hasAny(sequence) {
    return !(0, isEmpty_js_1.default)(sequence);
}
//# sourceMappingURL=hasAny.js.map