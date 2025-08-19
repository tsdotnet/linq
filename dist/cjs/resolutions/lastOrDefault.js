"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = lastOrDefault;
function lastOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array) {
            return sequence.length == 0
                ? defaultValue
                : sequence[sequence.length - 1];
        }
        let last = defaultValue;
        for (const current of sequence)
            last = current;
        return last;
    };
}
//# sourceMappingURL=lastOrDefault.js.map