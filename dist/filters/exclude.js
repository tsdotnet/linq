"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const same_1 = tslib_1.__importDefault(require("./same"));
/**
 * An iterable filter that returns all elements except for any in the exclusion sequence.
 * @param {Iterable<T>} exclusions
 * @return {IterableFilter<T>}
 */
function exclude(exclusions) {
    if (!exclusions)
        return same_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const x = new Set();
                const xi = exclusions[Symbol.iterator]();
                let n = xi.next();
                if (n.done) {
                    // No exclusions, just return the sequence in entirety.
                    for (const s of sequence)
                        yield s;
                    return;
                }
                x.add(n.value);
                let done = false;
                for (const s of sequence) {
                    if (x.has(s))
                        continue;
                    while (!done) {
                        n = xi.next();
                        if (n.done) {
                            done = true;
                            break;
                        }
                        else {
                            x.add(n.value);
                            if (!x.has(s))
                                break; // use set.has to reuse equality.
                        }
                    }
                    yield s;
                }
                x.clear();
            }
        };
    };
}
exports.default = exclude;
//# sourceMappingURL=exclude.js.map