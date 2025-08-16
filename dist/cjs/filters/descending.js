"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = descending;
const tslib_1 = require("tslib");
const compare_1 = require("@tsdotnet/compare");
const toArray_1 = tslib_1.__importDefault(require("../resolutions/toArray"));
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function descending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of (0, toArray_1.default)(sequence).sort(compare_1.compare.primitives.inverted))
                yield e;
        }
    };
}
//# sourceMappingURL=descending.js.map