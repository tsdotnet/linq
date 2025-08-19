"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = where;
function where(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (predicate(e, i++))
                        yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=where.js.map