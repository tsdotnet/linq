"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const empty_1 = (0, tslib_1.__importDefault)(require("../iterables/empty"));
const same_1 = (0, tslib_1.__importDefault)(require("./same"));
/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
function take(count) {
    if (count <= 0)
        return empty_1.default;
    if (!isFinite(count))
        return same_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    count = Math.min(count, len);
                    for (let i = 0; i < count; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    yield e;
                    if (--remain <= 0)
                        break;
                }
            }
        };
    };
}
exports.default = take;
//# sourceMappingURL=take.js.map