/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
function aggregate(reduction, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        let previous = initialValue, i = 0;
        for (const current of sequence)
            previous = reduction(previous, current, i++);
        return previous;
    };
}
export default aggregate;
//# sourceMappingURL=aggregate.js.map