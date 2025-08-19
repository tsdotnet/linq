"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = repeatSequence;
const exceptions_1 = require("@tsdotnet/exceptions");
function repeatSequence(sequence, count) {
    if (!sequence)
        throw new exceptions_1.ArgumentNullException('sequence');
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++) {
                for (const e of sequence) {
                    yield e;
                }
            }
        }
    };
}
//# sourceMappingURL=repeatSequence.js.map