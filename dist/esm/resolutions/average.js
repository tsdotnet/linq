import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function average(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
        count++;
    }
    if (count === 0)
        throw new InvalidOperationException('Sequence is empty.');
    return sum / count;
}

export { average as default };
//# sourceMappingURL=average.js.map
