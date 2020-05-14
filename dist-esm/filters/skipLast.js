/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import Queue from '@tsdotnet/queue';
import empty from '../iterables/empty';
import same from './same';
/**
 * An iterable filter that returns everything from the sequence except the last count of items.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function skipLast(count) {
    if (isNaN(count) || count <= 0)
        return same;
    if (!isFinite(count))
        return empty;
    return function* (sequence) {
        const q = new Queue();
        for (const e of sequence) {
            q.enqueue(e);
            if (q.count > count)
                yield q.dequeue(true);
        }
        q.clear();
    };
}
//# sourceMappingURL=skipLast.js.map