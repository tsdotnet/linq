"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns true if the sequence is empty.
 */
function isEmpty(sequence) {
    // noinspection PointlessBooleanExpressionJS
    return !sequence
        || sequence[Symbol.iterator]().next().done === true;
}
exports.default = isEmpty;
//# sourceMappingURL=isEmpty.js.map