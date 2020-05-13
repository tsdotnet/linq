/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out null values.
 */
export default function* notUndefined(sequence) {
    for (const e of sequence) {
        if (e !== undefined)
            yield e;
    }
}
//# sourceMappingURL=notUndefined.js.map