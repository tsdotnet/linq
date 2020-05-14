"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
function* notUndefined(sequence) {
    for (const e of sequence) {
        if (e !== undefined)
            yield e;
    }
}
exports.default = notUndefined;
//# sourceMappingURL=notUndefined.js.map