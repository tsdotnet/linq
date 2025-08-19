"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = firstOrDefault;
function firstOrDefault(defaultValue) {
    return function (sequence) {
        if (!sequence)
            return defaultValue;
        if (sequence instanceof Array)
            return sequence.length == 0 ? defaultValue : sequence[0];
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        return first.done ? defaultValue : first.value;
    };
}
//# sourceMappingURL=firstOrDefault.js.map