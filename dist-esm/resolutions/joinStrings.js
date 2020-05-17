/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Joins a set of strings using the provided separator.
 * @param {string} separator
 * @return {IterableTransform<string, string>}
 */
export function joinStrings(separator = '') {
    if (separator == null)
        separator = '';
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        const i = sequence[Symbol.iterator]();
        let n = i.next();
        if (n.done)
            return '';
        let result = '' + n.value;
        while (!(n = i.next()).done) {
            result += separator + n.value;
        }
        return result;
    };
}
//# sourceMappingURL=joinStrings.js.map