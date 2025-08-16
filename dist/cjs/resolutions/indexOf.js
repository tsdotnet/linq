"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = indexOf;
const compare_1 = require("@tsdotnet/compare");
const exceptions_1 = require("@tsdotnet/exceptions");
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} entry The item to look for.
 * @return {IterableTransform<T, number>} The transform that will look for the provided item.
 */
function indexOf(entry) {
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.indexOf(entry);
        let i = 0;
        for (const e of sequence) {
            if ((0, compare_1.areEqual)(e, entry))
                return i;
            i++;
        }
        return -1;
    };
}
//# sourceMappingURL=indexOf.js.map