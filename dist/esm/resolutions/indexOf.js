import { areEqual } from '@tsdotnet/compare';
import { ArgumentNullException } from '@tsdotnet/exceptions';

function indexOf(entry) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.indexOf(entry);
        let i = 0;
        for (const e of sequence) {
            if (areEqual(e, entry))
                return i;
            i++;
        }
        return -1;
    };
}

export { indexOf as default };
//# sourceMappingURL=indexOf.js.map
