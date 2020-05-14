"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.empty = exports.emptyIterator = exports.doneResult = void 0;
exports.doneResult = Object.freeze({
    done: true,
    value: undefined
});
exports.emptyIterator = Object.freeze({ next() { return exports.doneResult; } });
exports.empty = Object.freeze({ [Symbol.iterator]() { return exports.emptyIterator; } });
function default_1() {
    return exports.empty;
}
exports.default = default_1;
//# sourceMappingURL=empty.js.map