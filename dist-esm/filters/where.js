/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
/**
 * An iterable filter that only returns elements that match the provided predicate.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function where(predicate) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    if (predicate(e, i++))
                        yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=where.js.map