"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = append;
const tslib_1 = require("tslib");
const concat_1 = tslib_1.__importDefault(require("../iterables/concat"));
const same_1 = tslib_1.__importDefault(require("./same"));
/*
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
function append(...elements) {
    if (elements.length === 0)
        return same_1.default;
    return function (sequence) {
        return (0, concat_1.default)(sequence, elements);
    };
}
//# sourceMappingURL=append.js.map