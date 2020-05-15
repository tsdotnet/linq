/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Filters out undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotUndefined<T>>}
 */
export default function notUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== undefined)
                    yield e;
        }
    };
}
//# sourceMappingURL=notUndefined.js.map