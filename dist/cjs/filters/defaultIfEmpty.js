"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = defaultIfEmpty;
function defaultIfEmpty(defaultValue) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let hasElements = false;
                for (const e of sequence) {
                    hasElements = true;
                    yield e;
                }
                if (!hasElements)
                    yield defaultValue;
            }
        };
    };
}
//# sourceMappingURL=defaultIfEmpty.js.map