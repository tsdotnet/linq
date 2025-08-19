import { ArgumentNullException } from '@tsdotnet/exceptions';
import toArray from '../resolutions/toArray.js';

function reverse(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    return {
        *[Symbol.iterator]() {
            if (sequence instanceof Array) {
                const len = sequence.length;
                for (let i = len - 1; i >= 0; i--) {
                    if (len !== sequence.length)
                        throw Error('Array length changed during iteration.');
                    yield sequence[i];
                }
                return;
            }
            for (const e of toArray(sequence).reverse()) {
                yield e;
            }
        }
    };
}

export { reverse as default };
//# sourceMappingURL=reverse.js.map
