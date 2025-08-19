"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = takeWhile;
function takeWhile(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (!predicate(e, i++))
                        break;
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=takeWhile.js.map