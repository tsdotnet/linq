import { ArgumentNullException, ArgumentOutOfRangeException } from '@tsdotnet/exceptions';
import integer from '@tsdotnet/integer';

function elementAt(index) {
    integer.assertZeroOrGreater(index);
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException('sequence');
        let count = 0;
        if (sequence instanceof Array) {
            count = sequence.length;
            if (index < count)
                return sequence[index];
        }
        else {
            for (const e of sequence) {
                if (index === count++)
                    return e;
            }
        }
        throw new ArgumentOutOfRangeException('index', index, 'Exceeds the total number of elements: ' + count);
    };
}

export { elementAt as default };
//# sourceMappingURL=elementAt.js.map
