/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * An iterable filter that returns distinct elements from a sequence.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function distinct(sequence) {
    return {
        *[Symbol.iterator]() {
            const s = new Set();
            for (const e of sequence) {
                if (s.has(e))
                    continue;
                s.add(e);
                yield e;
            }
            s.clear();
        }
    };
}
//# sourceMappingURL=distinct.js.map