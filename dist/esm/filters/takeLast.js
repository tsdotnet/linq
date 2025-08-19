import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty.js';
import same from './same.js';

function takeLast(count) {
    if (count <= 0)
        return empty;
    if (!isFinite(count))
        return same;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = Math.max(0, len - count); i < len; i++) {
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
                        q.dequeue(true);
                }
                for (const e of q.consumer())
                    yield e;
            }
        };
    };
}

export { takeLast as default };
//# sourceMappingURL=takeLast.js.map
