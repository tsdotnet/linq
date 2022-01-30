"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const skipWhile_1 = (0, tslib_1.__importDefault)(require("./skipWhile"));
/**
 * An iterable filter that bypasses elements in sequence until the predicate condition returns is true.
 * Inverse of skipWhile.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
function skipUntil(predicate) {
    return (0, skipWhile_1.default)((e, i) => !predicate(e, i));
}
exports.default = skipUntil;
//# sourceMappingURL=skipUntil.js.map