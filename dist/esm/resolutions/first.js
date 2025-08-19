import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function first(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    if (sequence instanceof Array) {
        if (sequence.length != 0)
            return sequence[0];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        if (!first.done)
            return first.value;
    }
    throw new InvalidOperationException('The sequence is empty.');
}

export { first as default };
//# sourceMappingURL=first.js.map
