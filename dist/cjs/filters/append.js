"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = append;
const tslib_1 = require("tslib");
const concat_js_1 = tslib_1.__importDefault(require("../iterables/concat.js"));
const same_js_1 = tslib_1.__importDefault(require("./same.js"));
function append(...elements) {
    if (elements.length === 0)
        return same_js_1.default;
    return function (sequence) {
        return (0, concat_js_1.default)(sequence, elements);
    };
}
//# sourceMappingURL=append.js.map