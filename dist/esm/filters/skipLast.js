import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty.js';
import same from './same.js';

function skipLast(count) {
    if (isNaN(count) || count <= 0)
        return same;
    if (!isFinite(count))
        return empty;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = 0; i < len - count; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                const q = new Queue();
                for (const e of sequence) {
                    q.enqueue(e);
                    if (q.count > count)
                        yield q.dequeue(true);
                }
                q.clear();
            }
        };
    };
}

export { skipLast as default };
//# sourceMappingURL=skipLast.js.map
