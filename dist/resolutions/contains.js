"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const areEqual_1 = tslib_1.__importDefault(require("@tsdotnet/compare/dist/areEqual"));
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param item The item to look for.
 * @return {IterableTransform} The transform that will look for the provided item.
 */
function contains(item) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        for (const e of sequence) {
            if (areEqual_1.default(e, item))
                return true;
        }
        return false;
    };
}
exports.default = contains;
//# sourceMappingURL=contains.js.map