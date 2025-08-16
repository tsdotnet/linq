"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = iterateIndexes;
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike<T>} source
 * @return {Iterable<T>}
 */
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