"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const comparePrimitives_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/comparePrimitives"));
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function descending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of (0, toArray_1.default)(sequence).sort(comparePrimitives_1.default.inverted))
                yield e;
        }
    };
}
exports.default = descending;
//# sourceMappingURL=descending.js.map