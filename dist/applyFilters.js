"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Applies  a set of filters to a sequence.
 * @param {Iterable<T>} sequence The sequence to apply to.
 * @param {Iterable<IterableFilter<T>>} filters The filters to apply.
 * @return {Iterable<T>} The resultant sequence.
 */
function applyFilters(sequence, filters) {
    for (const filter of filters) {
        sequence = filter(sequence);
    }
    return sequence;
}
exports.default = applyFilters;
//# sourceMappingURL=applyFilters.js.map