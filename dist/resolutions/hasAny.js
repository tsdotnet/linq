"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const isEmpty_1 = tslib_1.__importDefault(require("./isEmpty"));
/**
 * Returns true if the sequence is not empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
function hasAny(sequence) {
    return !isEmpty_1.default(sequence);
}
exports.default = hasAny;
//# sourceMappingURL=hasAny.js.map