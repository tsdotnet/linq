"use strict";
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
 * @param {T} item
 * @return {IterableTransform<T, number>}
 */
function lastIndexOf(item) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        if (sequence instanceof Array)
            return sequence.lastIndexOf(item);
        let i = 0, last = -1;
        for (const e of sequence) {
            if (areEqual_1.default(e, item))
                last = i;
            i++;
        }
        return last;
    };
}
exports.default = lastIndexOf;
//# sourceMappingURL=lastIndexOf.js.map