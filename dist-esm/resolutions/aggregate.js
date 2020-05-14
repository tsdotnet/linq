/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: (U | undefined), current: T, index: number) => U} reduction
 * @param {U} initialValue
 * @return {IterableTransform<T, U | undefined>}
 */
export default function aggregate(reduction, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        let previous = initialValue, i = 0;
        for (const current of sequence)
            previous = reduction(previous, current, i++);
        return previous;
    };
}
//# sourceMappingURL=aggregate.js.map