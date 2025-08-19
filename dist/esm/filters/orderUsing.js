import { Order } from '@tsdotnet/compare';
import { ArgumentNullException } from '@tsdotnet/exceptions';
import toArray from '../resolutions/toArray.js';

function orderUsing(comparison, order = Order.Ascending) {
    if (!comparison)
        throw new ArgumentNullException('comparison');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort(order == Order.Descending
                    ? ((a, b) => comparison(a, b) * -1)
                    : comparison)) {
                    yield e;
                }
            }
        };
    };
}

export { orderUsing as default };
//# sourceMappingURL=orderUsing.js.map
