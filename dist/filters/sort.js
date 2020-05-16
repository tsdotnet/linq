"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.descending = exports.ascending = void 0;
const tslib_1 = require("tslib");
const comparePrimitives_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/comparePrimitives"));
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function ascending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray_1.default(sequence).sort(comparePrimitives_1.default))
                yield e;
        }
    };
}
exports.ascending = ascending;
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function descending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray_1.default(sequence).sort(comparePrimitives_1.default.inverted))
                yield e;
        }
    };
}
exports.descending = descending;
//# sourceMappingURL=sort.js.map