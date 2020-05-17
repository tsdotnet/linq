/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
/**
 * Applies  a set of filters to a sequence.
 * @param {Iterable<T>} sequence The sequence to apply to.
 * @param {Iterable<IterableFilter<T>>} filters The filters to apply.
 * @return {Iterable<T>} The resultant sequence.
 */
export default function applyFilters(sequence, filters) {
    for (const filter of filters) {
        sequence = filter(sequence);
    }
    return sequence;
}
//# sourceMappingURL=applyFilters.js.map