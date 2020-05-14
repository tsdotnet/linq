/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function* notNull(sequence) {
    for (const e of sequence) {
        if (e !== null)
            yield e;
    }
}
//# sourceMappingURL=notNull.js.map