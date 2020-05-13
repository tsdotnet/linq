"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumAndCount = void 0;
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the sum (.value) of a sequence and the number of entries (.count).
 * @param {Iterable} sequence The sequence of numbers to sum and count.
 * @return The result.
 */
function sumAndCount(sequence) {
    if (!sequence)
        throw new ArgumentNullException_1.default('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return { value: NaN, count: NaN };
        sum += s;
        count++;
    }
    return {
        value: sum,
        count: count
    };
}
exports.sumAndCount = sumAndCount;
//# sourceMappingURL=sumAndCount.js.map