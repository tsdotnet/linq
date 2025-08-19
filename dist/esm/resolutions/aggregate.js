import { ArgumentNullException, InvalidOperationException } from '@tsdotnet/exceptions';

function aggregate(reducer, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        let i = 0;
        if (initialValue === undefined) {
            const iterator = sequence[Symbol.iterator]();
            let n = iterator.next();
            if (n.done)
                throw new InvalidOperationException('Sequence is empty.  Specify an initial value allow for an empty iterable.');
            let previous = n.value;
            while (!(n = iterator.next()).done) {
                previous = reducer(previous, n.value, ++i);
            }
            return previous;
        }
        else {
            let previous = initialValue;
            for (const current of sequence)
                previous = reducer(previous, current, i++);
            return previous;
        }
    };
}

export { aggregate as default };
//# sourceMappingURL=aggregate.js.map
