"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isEmpty;
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
/**
 * Returns true if the sequence is empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
function isEmpty(sequence) {
    // noinspection PointlessBooleanExpressionJS
    return !sequence
        || sequence instanceof Array && (sequence.length === 0)
        || sequence[Symbol.iterator]().next().done === true;
}
//# sourceMappingURL=isEmpty.js.map