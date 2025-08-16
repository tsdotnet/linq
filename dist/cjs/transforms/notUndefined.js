"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = notUndefined;
/**
 * Filters out undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotUndefined<T>>}
 */
function notUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== undefined)
                    yield e;
        }
    };
}
//# sourceMappingURL=notUndefined.js.map