"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that will return results while the predicate condition is true and stops when false.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
function takeWhile(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (!predicate(e, i++))
                        break;
                    yield e;
                }
            }
        };
    };
}
exports.default = takeWhile;
//# sourceMappingURL=takeWhile.js.map