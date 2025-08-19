import { ArgumentNullException } from '@tsdotnet/exceptions';

function sumAndCount(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let sum = 0, count = 0;
    for (const s of sequence) {
        if (isNaN(s))
            return { value: NaN, count: NaN };
        sum += s;
        count++;
    }
    return {
        value: sum,
        count: count
    };
}

export { sumAndCount as default };
//# sourceMappingURL=sumAndCount.js.map
