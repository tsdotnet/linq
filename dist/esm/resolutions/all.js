import { ArgumentNullException } from '@tsdotnet/exceptions';

function all(predicate) {
    if (!predicate)
        throw new ArgumentNullException('predicate');
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.every(predicate);
        let i = 0;
        for (const e of sequence) {
            if (!predicate(e, i++))
                return false;
        }
        return true;
    };
}

export { all as default };
//# sourceMappingURL=all.js.map
