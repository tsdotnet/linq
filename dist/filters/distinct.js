"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that returns distinct elements from a sequence.
 */
function* distinct(sequence) {
    const s = new Set();
    for (const e of sequence) {
        if (s.has(e))
            continue;
        s.add(e);
        yield e;
    }
    s.clear();
}
exports.default = distinct;
//# sourceMappingURL=distinct.js.map