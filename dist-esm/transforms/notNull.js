/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotNull<T>>}
 */
export default function notNull(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== null)
                    yield e;
        }
    };
}
//# sourceMappingURL=notNull.js.map