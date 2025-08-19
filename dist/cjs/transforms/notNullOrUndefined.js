"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notNullOrUndefined;
function notNullOrUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e != null)
                    yield e;
        }
    };
}
//# sourceMappingURL=notNullOrUndefined.js.map