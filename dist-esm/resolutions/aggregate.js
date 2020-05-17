/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import InvalidOperationException from '@tsdotnet/exceptions/dist/InvalidOperationException';
/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified `initialValue` is used as the initial accumulator value, and the specified function is used to select the result value.
 * If no `initialValue` is specified, the first entry in the sequence is used.
 * @param {(previous: (U | undefined), current: T, index: number) => U} reduction
 * @param {U} initialValue
 * @return {IterableTransform<T, U | undefined>}
 */
export default function aggregate(reduction, initialValue) {
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
                previous = reduction(previous, n.value, ++i);
            }
            return previous;
        }
        else {
            let previous = initialValue;
            for (const current of sequence)
                previous = reduction(previous, current, i++);
            return previous;
        }
    };
}
//# sourceMappingURL=aggregate.js.map