import { ArgumentNullException } from '@tsdotnet/exceptions';

function toArray(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    if (sequence instanceof Array)
        return sequence.slice();
    const result = [];
    for (const e of sequence)
        result.push(e);
    return result;
}

export { toArray as default };
//# sourceMappingURL=toArray.js.map
