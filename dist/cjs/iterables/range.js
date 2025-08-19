"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = range;
function range(start = 0, maxInclusive = Infinity, step = 1) {
    return {
        *[Symbol.iterator]() {
            for (let i = start; i <= maxInclusive; i += step) {
                yield i;
            }
        }
    };
}
//# sourceMappingURL=range.js.map