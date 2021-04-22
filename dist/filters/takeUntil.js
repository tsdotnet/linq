"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const takeWhile_1 = tslib_1.__importDefault(require("./takeWhile"));
/**
 * An iterable filter that will return results until the predicate condition is true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
function takeUntil(predicate) {
    return takeWhile_1.default((e, i) => !predicate(e, i));
}
exports.default = takeUntil;
//# sourceMappingURL=takeUntil.js.map