"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = iterateIndexes;
const exceptions_1 = require("@tsdotnet/exceptions");
function iterateIndexes(source) {
    if (!source)
        throw new exceptions_1.ArgumentNullException('source');
    return {
        *[Symbol.iterator]() {
            const len = source === null || source === void 0 ? void 0 : source.length;
            if (len) {
                for (let i = 0; i < len; i++) {
                    yield source[i];
                }
            }
        }
    };
}
//# sourceMappingURL=iterateIndexes.js.map