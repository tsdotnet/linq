"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a sequence that contains each value in the provided sequence and repeats.
 * @param {Iterable<T>} sequence The sequence to repeat.
 * @param {number} count The number of times to repeat the sequence.
 * @return {Iterable<T>}
 */
function* repeatSequence(sequence, count) {
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