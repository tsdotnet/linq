"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = merge;
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * Concatenates the sequences.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
function merge(sequences) {
    if (!sequences)
        throw new exceptions_1.ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            for (const s of sequences) {
                for (const e of s) {
                    yield e;
                }
            }
        }
    };
}
//# sourceMappingURL=merge.js.map