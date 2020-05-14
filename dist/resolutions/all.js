"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable transform that resolves false if the predicate ever returns false. Otherwise true.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
function all(predicate) {
    if (!predicate)
        throw new ArgumentNullException_1.default('predicate');
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        if (sequence instanceof Array)
            return sequence.every(predicate);
        let i = 0;
        for (const e of sequence) {
            if (!predicate(e, i++))
                return false;
        }
        return true;
    };
}
exports.default = all;
//# sourceMappingURL=all.js.map