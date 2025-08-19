"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = onComplete;
const exceptions_1 = require("@tsdotnet/exceptions");
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