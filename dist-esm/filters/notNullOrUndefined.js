/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function* notNullOrUndefined(sequence) {
    for (const e of sequence) {
        if (e != null)
            yield e;
    }
}
//# sourceMappingURL=notNullOrUndefined.js.map