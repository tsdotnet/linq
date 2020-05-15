"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
 * @param {T} defaultValue
 * @return {IterableFilter<T>}
 */
function defaultIfEmpty(defaultValue) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let hasElements = false;
                for (const e of sequence) {
                    hasElements = true;
                    yield e;
                }
                if (!hasElements)
                    yield defaultValue;
            }
        };
    };
}
exports.default = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map