/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
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