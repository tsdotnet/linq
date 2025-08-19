import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function max(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    const i = sequence[Symbol.iterator]();
    let n = i.next();
    if (n.done)
        throw new InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
    let max = n.value;
    while (!(n = i.next()).done) {
        if (n.value > max)
            max = n.value;
    }
    return max;
}

export { max as default };
//# sourceMappingURL=max.js.map
