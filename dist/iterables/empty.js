"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyIterable = exports.emptyIterator = exports.doneResult = void 0;
exports.doneResult = Object.freeze({
    done: true,
    value: undefined
});
exports.emptyIterator = Object.freeze({ next() { return exports.doneResult; } });
exports.emptyIterable = Object.freeze({ [Symbol.iterator]() { return exports.emptyIterator; } });
function default_1() {
    return exports.emptyIterable;
}
exports.default = default_1;
//# sourceMappingURL=empty.js.map