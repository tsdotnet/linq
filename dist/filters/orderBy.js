"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const comparePrimitives_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/compare/dist/comparePrimitives"));
const toArray_1 = (0, tslib_1.__importDefault)(require("../resolutions/toArray"));
/**
 * An iterable filter that orders elements by a primitive value provided by the key selector.
 * @param {Selector<T, TKey>} keySelector
 * @param {Order} order
 * @return {IterableFilter<T>}
 */
function orderBy(keySelector, order = 1 /* Ascending */) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of (0, toArray_1.default)(sequence).sort((a, b) => (0, comparePrimitives_1.default)(keySelector(a), keySelector(b)) * order)) {
                    yield e;
                }
            }
        };
    };
}
exports.default = orderBy;
//# sourceMappingURL=orderBy.js.map