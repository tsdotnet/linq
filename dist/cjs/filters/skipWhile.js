"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = skipWhile;
function skipWhile(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0, skipped = false;
                for (const e of sequence) {
                    if (skipped || !predicate(e, i)) {
                        skipped = true;
                        yield e;
                    }
                    i++;
                }
            }
        };
    };
}
//# sourceMappingURL=skipWhile.js.map