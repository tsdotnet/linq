"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const distinct_1 = (0, tslib_1.__importDefault)(require("../filters/distinct"));
const merge_1 = (0, tslib_1.__importDefault)(require("./merge"));
/**
 * Produces the set union of all sequences provided..
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
function union(...sequences) {
    return (0, distinct_1.default)((0, merge_1.default)(sequences));
}
exports.default = union;
//# sourceMappingURL=union.js.map