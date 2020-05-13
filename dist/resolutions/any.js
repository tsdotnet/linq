"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
 * If no predicate is provided, will resolve true if the sequence is not empty.
 * @param predicate The optional predicate to evaluate with.
 * @return {IterableTransform} The transform that will invoke the predicate.
 */
function any(predicate) {
    return function (sequence) {
        if (!sequence)
            return false;
        if (!predicate) {
            // noinspection PointlessBooleanExpressionJS
            return sequence[Symbol.iterator]().next().done !== true;
        }
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                return true;
        }
        return false;
    };
}
exports.default = any;
//# sourceMappingURL=any.js.map