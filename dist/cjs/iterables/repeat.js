"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = repeat;
function repeat(entry, count) {
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++)
                yield entry;
        }
    };
}
//# sourceMappingURL=repeat.js.map