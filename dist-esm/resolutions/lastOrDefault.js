/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import aggregate from './aggregate';
const a = aggregate((p, c) => c);
/**
 * Returns the last element of a sequence, or a the default value if no element is found.
 */
export default function lastOrDefault(sequence, defaultValue) {
    if (!sequence)
        return undefined;
    return defaultValue === undefined
        ? a(sequence)
        : aggregate((p, c) => c, defaultValue)(sequence);
}
//# sourceMappingURL=lastOrDefault.js.map