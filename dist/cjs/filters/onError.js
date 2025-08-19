"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = onError;
const exceptions_1 = require("@tsdotnet/exceptions");
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
//# sourceMappingURL=onError.js.map