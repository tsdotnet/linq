"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const queue_1 = tslib_1.__importDefault(require("@tsdotnet/queue"));
const same_1 = tslib_1.__importDefault(require("./same"));
/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 * @param {number} size
 * @return {IterableFilter<T>}
 */
function buffer(size) {
    if (size <= 0)
        return same_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const q = new queue_1.default();
                for (const e of sequence) {
                    q.enqueue(e);
                    if (q.count > size)
                        yield q.dequeue(true);
                }
                while (!q.isEmpty)
                    yield q.dequeue(true);
            }
        };
    };
}
exports.default = buffer;
//# sourceMappingURL=buffer.js.map