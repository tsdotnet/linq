/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import Queue from '@tsdotnet/queue';
import same from './same';
/**
 * An iterable filter that (once started) pre-fetches entries from the source up to the size.
 */
export default function buffer(size) {
    if (size <= 0)
        return same;
    return function* (sequence) {
        const q = new Queue();
        for (const e of sequence) {
            q.enqueue(e);
            if (q.count > size)
                yield q.dequeue(true);
        }
        while (!q.isEmpty)
            yield q.dequeue(true);
    };
}
//# sourceMappingURL=buffer.js.map