import empty from '../iterables/empty.js';
import same from './same.js';

function skip(count) {
    if (isNaN(count) || count <= 0)
        return same;
    if (!isFinite(count))
        return empty;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = count; i < len; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    if (0 < remain--)
                        continue;
                    yield e;
                }
            }
        };
    };
}

export { skip as default };
//# sourceMappingURL=skip.js.map
