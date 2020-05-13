/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Returns the first element of a sequence, or a the default value if no element is found.
 */
export default function firstOrDefault(sequence, defaultValue) {
    if (!sequence)
        return defaultValue;
    const iterator = sequence[Symbol.iterator]();
    const first = iterator.next();
    return first.done ? defaultValue : first.value;
}
//# sourceMappingURL=firstOrDefault.js.map