import { compare } from '@tsdotnet/compare';
import toArray from '../resolutions/toArray.js';

function ascending(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of toArray(sequence).sort(compare.primitives))
                yield e;
        }
    };
}

export { ascending as default };
//# sourceMappingURL=ascending.js.map
