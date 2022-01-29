"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable filter that invokes the provided handler if there was an error while iterating.
 * Any error while iterating assumes no more results and the iteration will be complete after the error.
 * The handler can decide if it wants to rethrow the error or not.
 * @param {(ex: any, index: number) => void} handler
 * @return {IterableFilter<T>}
 */
function onError(handler) {
    if (!handler)
        throw new ArgumentNullException_1.default('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const iterator = sequence[Symbol.iterator]();
                let i = 0;
                while (true) {
                    try {
                        const next = iterator.next();
                        if (next.done)
                            break;
                        yield next.value;
                    }
                    catch (ex) {
                        handler(ex, i);
                        break;
                    }
                    i++;
                }
            }
        };
    };
}
exports.default = onError;
//# sourceMappingURL=onError.js.map