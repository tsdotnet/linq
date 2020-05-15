"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that only returns elements that match the provided predicate.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
function where(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (predicate(e, i++))
                        yield e;
                }
            }
        };
    };
}
exports.default = where;
//# sourceMappingURL=where.js.map