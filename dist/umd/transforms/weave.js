/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@tsdotnet/exceptions", "@tsdotnet/linked-node-list"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = weave;
    const exceptions_1 = require("@tsdotnet/exceptions");
    const linked_node_list_1 = require("@tsdotnet/linked-node-list");
    /**
     * Returns an item from each iterable before calling next on each.
     * @param {Iterable<Iterable<T>>} sequences
     * @return {Iterable<T>}
     */
    function weave(sequences) {
        if (!sequences)
            throw new exceptions_1.ArgumentNullException('sequences');
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
});
//# sourceMappingURL=weave.js.map