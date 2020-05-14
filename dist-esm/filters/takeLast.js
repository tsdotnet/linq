/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty';
import same from './same';
/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function takeLast(count) {
    if (count <= 0)
        return empty;
    if (!isFinite(count))
        return same;
    return function* (sequence) {
        const q = new Queue();
        for (const e of sequence) {
            q.enqueue(e);
            if (q.count > count)
                q.dequeue(true);
        }
        for (const e of q.consumer())
            yield e;
    };
}
//# sourceMappingURL=takeLast.js.map