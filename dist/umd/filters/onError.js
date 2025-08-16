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
        define(["require", "exports", "@tsdotnet/exceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = onError;
    const exceptions_1 = require("@tsdotnet/exceptions");
    /**
     * An iterable filter that invokes the provided handler if there was an error while iterating.
     * Any error while iterating assumes no more results and the iteration will be complete after the error.
     * The handler can decide if it wants to rethrow the error or not.
     * @param {(ex: any, index: number) => void} handler
     * @return {IterableFilter<T>}
     */
    function onError(handler) {
        if (!handler)
            throw new exceptions_1.ArgumentNullException('action');
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
});
//# sourceMappingURL=onError.js.map