"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
function onComplete(action) {
    if (!action)
        throw new ArgumentNullException_1.default('action');
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
exports.default = onComplete;
//# sourceMappingURL=onComplete.js.map