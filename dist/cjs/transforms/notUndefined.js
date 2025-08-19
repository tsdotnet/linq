"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notUndefined;
function notUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== undefined)
                    yield e;
        }
    };
}
//# sourceMappingURL=notUndefined.js.map