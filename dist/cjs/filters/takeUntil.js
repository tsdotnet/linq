"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = takeUntil;
const tslib_1 = require("tslib");
const takeWhile_1 = tslib_1.__importDefault(require("./takeWhile"));
function takeUntil(predicate) {
    return (0, takeWhile_1.default)((e, i) => !predicate(e, i));
}
//# sourceMappingURL=takeUntil.js.map