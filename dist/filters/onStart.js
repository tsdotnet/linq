"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable filter that invokes the provided action before iterating results.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
function onStart(action) {
    if (!action)
        throw new ArgumentNullException_1.default('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                action();
                for (const e of sequence)
                    yield e;
            }
        };
    };
}
exports.default = onStart;
//# sourceMappingURL=onStart.js.map