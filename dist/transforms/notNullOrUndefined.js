"use strict";
/**
 * @packageDocumentation
 * @module transforms
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filters out null or undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NonNullable<T>>}
 */
function notNullOrUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e != null)
                    yield e;
        }
    };
}
exports.default = notNullOrUndefined;
//# sourceMappingURL=notNullOrUndefined.js.map