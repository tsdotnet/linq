"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Generates a sequence that contains each value in the provided sequence and repeats.
 * @param {Iterable<T>} sequence The sequence to repeat.
 * @param {number} count The number of times to repeat the sequence.
 * @return {Iterable<T>}
 */
function repeatSequence(sequence, count) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
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
exports.default = repeatSequence;
//# sourceMappingURL=repeatSequence.js.map