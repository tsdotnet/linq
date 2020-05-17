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
 * Generates a sequence of numbers within a specified range.
 * @param {number} start
 * @param {number} maxInclusive
 * @param {number} step
 * @returns {Iterable<number>}
 */
function range(start = 0, maxInclusive = Infinity, step = 1) {
    return {
        *[Symbol.iterator]() {
            for (let i = start; i <= maxInclusive; i += step) {
                yield i;
            }
        }
    };
}
exports.default = range;
//# sourceMappingURL=range.js.map