import { ArgumentNullException } from '@tsdotnet/exceptions';
import { LinkedValueNodeList } from '@tsdotnet/linked-node-list';

function weave(sequences) {
    if (!sequences)
        throw new ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            const iterators = new LinkedValueNodeList();
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

export { weave as default };
//# sourceMappingURL=weave.js.map
