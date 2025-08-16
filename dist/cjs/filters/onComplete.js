"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = onComplete;
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
function onComplete(action) {
    if (!action)
        throw new exceptions_1.ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    yield e;
                action();
            }
        };
    };
}
//# sourceMappingURL=onComplete.js.map