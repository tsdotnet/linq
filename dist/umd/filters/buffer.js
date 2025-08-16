/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@tsdotnet/queue", "./same"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = buffer;
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
});
//# sourceMappingURL=buffer.js.map