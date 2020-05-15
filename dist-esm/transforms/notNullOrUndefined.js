/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out null or undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NonNullable<T>>}
 */
export default function notNullOrUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e != null)
                    yield e;
        }
    };
}
//# sourceMappingURL=notNullOrUndefined.js.map