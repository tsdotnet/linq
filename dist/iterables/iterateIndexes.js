"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike} source
 * @returns {Iterable}
 */
function* iterateIndexes(source) {
    const len = source === null || source === void 0 ? void 0 : source.length;
    if (len) {
        for (let i = 0; i < len; i++) {
            yield source[i];
        }
    }
}
exports.default = iterateIndexes;
//# sourceMappingURL=iterateIndexes.js.map