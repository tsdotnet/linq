/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * An iterable filter that only returns elements that match the provided predicate.
 */
export default function where(predicate) {
    return function* (sequence) {
        let i = 0;
        for (const e of sequence) {
            if (predicate(e, i++))
                yield e;
        }
    };
}
//# sourceMappingURL=where.js.map