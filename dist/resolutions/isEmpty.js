"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the sequence is empty.
 * @param {Iterable<any>} sequence
 * @return {boolean}
 */
function isEmpty(sequence) {
    // noinspection PointlessBooleanExpressionJS
    return !sequence
        || sequence instanceof Array && !sequence.length
        || sequence[Symbol.iterator]().next().done === true;
}
exports.default = isEmpty;
//# sourceMappingURL=isEmpty.js.map