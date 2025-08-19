"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = any;
const tslib_1 = require("tslib");
const isEmpty_1 = tslib_1.__importDefault(require("./isEmpty"));
function any(predicate) {
    return function (sequence) {
        if (!sequence)
            return false;
        if (!predicate) {
            return !(0, isEmpty_1.default)(sequence);
        }
        if (sequence instanceof Array)
            return sequence.some(predicate);
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                return true;
        }
        return false;
    };
}
//# sourceMappingURL=any.js.map