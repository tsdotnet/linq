"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = weave;
const exceptions_1 = require("@tsdotnet/exceptions");
const linked_node_list_1 = require("@tsdotnet/linked-node-list");
function weave(sequences) {
    if (!sequences)
        throw new exceptions_1.ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            const iterators = new linked_node_list_1.LinkedValueNodeList();
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