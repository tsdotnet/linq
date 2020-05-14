/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns an iterator that iterates the provided ArrayLike using length and index.
 * @param {ArrayLike<T>} source
 * @return {Iterable<T>}
 */
export default function* iterateIndexes(source) {
    const len = source === null || source === void 0 ? void 0 : source.length;
    if (len) {
        for (let i = 0; i < len; i++) {
            yield source[i];
        }
    }
}
//# sourceMappingURL=iterateIndexes.js.map