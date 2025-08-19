import { Order, compare } from '@tsdotnet/compare';
import toArray from '../resolutions/toArray.js';

function orderBy(keySelector, order = Order.Ascending) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort((a, b) => compare.primitives(keySelector(a), keySelector(b)) * order)) {
                    yield e;
                }
            }
        };
    };
}

export { orderBy as default };
//# sourceMappingURL=orderBy.js.map
