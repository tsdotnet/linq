import { areEqual } from '@tsdotnet/compare';
import { ArgumentNullException } from '@tsdotnet/exceptions';

function lastIndexOf(item) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.lastIndexOf(item);
        let i = 0, last = -1;
        for (const e of sequence) {
            if (areEqual(e, item))
                last = i;
            i++;
        }
        return last;
    };
}

export { lastIndexOf as default };
//# sourceMappingURL=lastIndexOf.js.map
