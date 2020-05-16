"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const concat_1 = tslib_1.__importDefault(require("../iterables/concat"));
const same_1 = tslib_1.__importDefault(require("./same"));
/*
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
function append(...elements) {
    if (!elements.length)
        return same_1.default;
    return function (sequence) {
        return concat_1.default(sequence, elements);
    };
}
exports.default = append;
//# sourceMappingURL=append.js.map