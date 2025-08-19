"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = distinct;
function distinct(sequence) {
    return {
        *[Symbol.iterator]() {
            const s = new Set();
            for (const e of sequence) {
                if (s.has(e))
                    continue;
                s.add(e);
                yield e;
            }
            s.clear();
        }
    };
}
//# sourceMappingURL=distinct.js.map