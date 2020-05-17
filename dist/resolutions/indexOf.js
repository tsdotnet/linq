"use strict";
/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const areEqual_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/areEqual"));
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} entry The item to look for.
 * @return {IterableTransform<T, number>} The transform that will look for the provided item.
 */
function indexOf(entry) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        if (sequence instanceof Array)
            return sequence.indexOf(entry);
        let i = 0;
        for (const e of sequence) {
            if (areEqual_1.default(e, entry))
                return i;
            i++;
        }
        return -1;
    };
}
exports.default = indexOf;
//# sourceMappingURL=indexOf.js.map