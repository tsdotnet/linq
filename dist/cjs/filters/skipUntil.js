"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = skipUntil;
const tslib_1 = require("tslib");
const skipWhile_1 = tslib_1.__importDefault(require("./skipWhile"));
function skipUntil(predicate) {
    return (0, skipWhile_1.default)((e, i) => !predicate(e, i));
}
//# sourceMappingURL=skipUntil.js.map