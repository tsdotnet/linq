"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notNull;
function notNull(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== null)
                    yield e;
        }
    };
}
//# sourceMappingURL=notNull.js.map