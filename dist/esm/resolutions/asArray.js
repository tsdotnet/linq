import { ArgumentNullException } from '@tsdotnet/exceptions';

function asArray(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    if (sequence instanceof Array)
        return sequence;
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}

export { asArray as default };
//# sourceMappingURL=asArray.js.map
