"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = elementAtOrDefault;
const tslib_1 = require("tslib");
const integer_1 = tslib_1.__importDefault(require("@tsdotnet/integer"));
function elementAtOrDefault(index, defaultValue) {
    integer_1.default.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array)
            return index < sequence.length ? sequence[index] : defaultValue;
        let count = 0;
        for (const e of sequence) {
            if (index === count++)
                return e;
        }
        return defaultValue;
    };
}
//# sourceMappingURL=elementAtOrDefault.js.map