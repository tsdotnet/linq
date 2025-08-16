"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = hasAny;
const tslib_1 = require("tslib");
const isEmpty_1 = tslib_1.__importDefault(require("./isEmpty"));
/**
 * Returns true if the sequence is not empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
function hasAny(sequence) {
    return !(0, isEmpty_1.default)(sequence);
}
//# sourceMappingURL=hasAny.js.map