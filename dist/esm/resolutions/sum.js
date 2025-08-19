import { ArgumentNullException } from '@tsdotnet/exceptions';

function sum(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let sum = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        sum += s;
    }
    return sum;
}

export { sum as default };
//# sourceMappingURL=sum.js.map
