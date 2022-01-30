"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotNull<T>>}
 */
function notNull(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== null)
                    yield e;
        }
    };
}
exports.default = notNull;
//# sourceMappingURL=notNull.js.map