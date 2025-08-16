"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = count;
const tslib_1 = require("tslib");
const aggregate_1 = tslib_1.__importDefault(require("./aggregate"));
const a = (0, aggregate_1.default)((p) => p + 1, 0);
/**
 * Returns the number of entries in a sequence.
 * @param {Iterable<T>} sequence
 * @return {number}
 */
function count(sequence) {
    if (sequence instanceof Array)
        return sequence.length;
    return sequence ? a(sequence) : 0;
}
//# sourceMappingURL=count.js.map