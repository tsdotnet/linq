/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * An iterable filter that will return results while the predicate condition is true and stops when false.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableFilter<T>}
 */
export default function takeWhile(predicate) {
    return function* (sequence) {
        let i = 0;
        for (const e of sequence) {
            if (!predicate(e, i++))
                break;
            yield e;
        }
    };
}
//# sourceMappingURL=takeWhile.js.map