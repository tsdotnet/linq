import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function last(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    if (sequence instanceof Array) {
        if (sequence.length != 0)
            return sequence[sequence.length - 1];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        let next = iterator.next();
        if (!next.done) {
            let last;
            do {
                last = next.value;
                next = iterator.next();
            } while (!next.done);
            return last;
        }
    }
    throw new InvalidOperationException('The sequence is empty.');
}

export { last as default };
//# sourceMappingURL=last.js.map
