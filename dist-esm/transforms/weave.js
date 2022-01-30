/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import { LinkedValueNodeList } from '@tsdotnet/linked-node-list';
/**
 * Returns an item from each iterable before calling next on each.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
export default function weave(sequences) {
    if (!sequences)
        throw new ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            const iterators = new LinkedValueNodeList();
            // first pass.
            for (const s of sequences) {
                const i = s[Symbol.iterator]();
                const n = i.next();
                if (n.done)
                    continue;
                yield n.value;
                iterators.addNode({ value: i });
            }
            while (iterators.unsafeCount) {
                let node = iterators.first;
                while (node) {
                    const c = node;
                    node = c.next;
                    const n = c.value.next();
                    if (n.done)
                        iterators.removeNode(c);
                    else
                        yield n.value;
                }
            }
        }
    };
}
//# sourceMappingURL=weave.js.map