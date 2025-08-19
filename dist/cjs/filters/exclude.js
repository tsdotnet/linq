"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exclude;
const tslib_1 = require("tslib");
const same_1 = tslib_1.__importDefault(require("./same"));
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
                                break;
                        }
                    }
                    yield s;
                }
                x.clear();
            }
        };
    };
}
//# sourceMappingURL=exclude.js.map