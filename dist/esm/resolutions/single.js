import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function single(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let hasElements;
    if (sequence instanceof Array) {
        const len = sequence.length;
        hasElements = len !== 0;
        if (len === 1)
            return sequence[0];
    }
    else {
        const iterator = sequence[Symbol.iterator]();
        const first = iterator.next();
        hasElements = !first.done;
        if (hasElements && iterator.next().done)
            return first.value;
    }
    throw new InvalidOperationException(hasElements
        ? 'Sequence contains more than one element.'
        : 'The sequence is empty.');
}

export { single as default };
//# sourceMappingURL=single.js.map
