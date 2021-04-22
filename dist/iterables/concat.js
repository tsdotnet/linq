"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const merge_1 = tslib_1.__importDefault(require("./merge"));
/**
 * Concatenates the provided sequences.
 * @param {Iterable<T>} sequences
 * @return {Iterable<T>}
 */
function concat(...sequences) {
    return merge_1.default(sequences);
}
exports.default = concat;
//# sourceMappingURL=concat.js.map