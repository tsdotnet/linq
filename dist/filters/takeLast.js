"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const queue_1 = tslib_1.__importDefault(require("@tsdotnet/queue"));
const empty_1 = tslib_1.__importDefault(require("../iterables/empty"));
const same_1 = tslib_1.__importDefault(require("./same"));
/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
function takeLast(count) {
    if (count <= 0)
        return empty_1.default;
    if (!isFinite(count))
        return same_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = Math.max(0, len - count); i < len; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                const q = new queue_1.default();
                for (const e of sequence) {
                    q.enqueue(e);
                    if (q.count > count)
                        q.dequeue(true);
                }
                for (const e of q.consumer())
                    yield e;
            }
        };
    };
}
exports.default = takeLast;
//# sourceMappingURL=takeLast.js.map