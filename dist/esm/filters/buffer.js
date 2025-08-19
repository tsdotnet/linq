import Queue from '@tsdotnet/queue';
import same from './same.js';

function buffer(size) {
    if (size <= 0)
        return same;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const q = new Queue();
                for (const e of sequence) {
                    q.enqueue(e);
                    if (q.count > size)
                        yield q.dequeue(true);
                }
                while (!q.isEmpty)
                    yield q.dequeue(true);
            }
        };
    };
}

export { buffer as default };
//# sourceMappingURL=buffer.js.map
