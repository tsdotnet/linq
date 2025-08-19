import { compare } from '@tsdotnet/compare';
import toArray from '../resolutions/toArray.js';

function descending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray(sequence).sort(compare.primitives.inverted))
                yield e;
        }
    };
}

export { descending as default };
//# sourceMappingURL=descending.js.map
