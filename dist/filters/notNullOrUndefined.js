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
function* notNullOrUndefined(sequence) {
    for (const e of sequence) {
        if (e != null)
            yield e;
    }
}
exports.default = notNullOrUndefined;
//# sourceMappingURL=notNullOrUndefined.js.map