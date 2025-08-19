import empty from '../iterables/empty.js';
import same from './same.js';

function take(count) {
    if (count <= 0)
        return empty;
    if (!isFinite(count))
        return same;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    count = Math.min(count, len);
                    for (let i = 0; i < count; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    yield e;
                    if (--remain <= 0)
                        break;
                }
            }
        };
    };
}

export { take as default };
//# sourceMappingURL=take.js.map
