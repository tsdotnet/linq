"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const empty_1 = tslib_1.__importDefault(require("../iterables/empty"));
const same_1 = tslib_1.__importDefault(require("./same"));
/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
function skip(count) {
    if (isNaN(count) || count <= 0)
        return same_1.default;
    if (!isFinite(count))
        return empty_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = count; i < len; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    if (0 < remain--)
                        continue;
                    yield e;
                }
            }
        };
    };
}
exports.default = skip;
//# sourceMappingURL=skip.js.map