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
 * An iterable filter that returns everything from the sequence except the last count of items.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
function skipLast(count) {
    if (isNaN(count) || count <= 0)
        return same_1.default;
    if (!isFinite(count))
        return empty_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = 0; i < len - count; i++) {
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
                        yield q.dequeue(true);
                }
                q.clear();
            }
        };
    };
}
exports.default = skipLast;
//# sourceMappingURL=skipLast.js.map