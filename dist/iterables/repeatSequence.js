"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a sequence that contains each value in the provided sequence.
 */
function* repeatSequence(sequence, count = Infinity) {
    if (sequence) {
        for (let i = 0; i < count; i++) {
            for (const e of sequence) {
                yield e;
            }
        }
    }
}
exports.default = repeatSequence;
//# sourceMappingURL=repeatSequence.js.map