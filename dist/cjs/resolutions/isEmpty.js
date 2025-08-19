"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isEmpty;
function isEmpty(sequence) {
    return !sequence
        || sequence instanceof Array && (sequence.length === 0)
        || sequence[Symbol.iterator]().next().done === true;
}
//# sourceMappingURL=isEmpty.js.map