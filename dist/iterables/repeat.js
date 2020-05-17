"use strict";
/**
 * @packageDocumentation
 * @module iterables
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a sequence that contains one repeated value.
 * @param {T} entry
 * @param {number} count The number of times to repeat.
 * @return {Iterable<T>}
 */
function repeat(entry, count) {
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++)
                yield entry;
        }
    };
}
exports.default = repeat;
//# sourceMappingURL=repeat.js.map