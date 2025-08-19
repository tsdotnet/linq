import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function min(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
    let min = n.value;
    while (!(n = i.next()).done) {
        if (n.value < min)
            min = n.value;
    }
    return min;
}

export { min as default };
//# sourceMappingURL=min.js.map
