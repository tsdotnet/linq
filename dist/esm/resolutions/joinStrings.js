import { ArgumentNullException } from '@tsdotnet/exceptions';

function joinStrings(separator = '') {
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

export { joinStrings };
//# sourceMappingURL=joinStrings.js.map
