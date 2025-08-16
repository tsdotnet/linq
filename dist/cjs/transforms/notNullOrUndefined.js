"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notNullOrUndefined;
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
//# sourceMappingURL=notNullOrUndefined.js.map