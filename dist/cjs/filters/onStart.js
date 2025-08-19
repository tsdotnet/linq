"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = onStart;
const exceptions_1 = require("@tsdotnet/exceptions");
function onStart(action) {
    if (!action)
        throw new exceptions_1.ArgumentNullException('action');
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
//# sourceMappingURL=onStart.js.map