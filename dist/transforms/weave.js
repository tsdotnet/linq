"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const linked_node_list_1 = require("@tsdotnet/linked-node-list");
/**
 * Returns an item from each iterable before calling next on each.
 * @param {Iterable<Iterable<T>>} sequences
 * @return {Iterable<T>}
 */
function weave(sequences) {
    if (!sequences)
        throw new ArgumentNullException_1.default('sequences');
    return {
        *[Symbol.iterator]() {
            const iterators = new linked_node_list_1.LinkedValueNodeList();
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
exports.default = weave;
//# sourceMappingURL=weave.js.map