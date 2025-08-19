"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = zip;
const exceptions_1 = require("@tsdotnet/exceptions");
function zip(sequence1, sequence2, selector) {
    if (!sequence1)
        throw new exceptions_1.ArgumentNullException('sequence1');
    if (!sequence2)
        throw new exceptions_1.ArgumentNullException('sequence2');
    if (!selector)
        throw new exceptions_1.ArgumentNullException('selector');
    return {
        *[Symbol.iterator]() {
            const i1 = sequence1[Symbol.iterator](), i2 = sequence2[Symbol.iterator]();
            let n1 = i1.next(), n2 = i2.next(), i = 0;
            while (!n1.done || !n2.done) {
                yield selector(n1, n2, i++);
                n1 = i1.next();
                n2 = i2.next();
            }
        }
    };
}
//# sourceMappingURL=zip.js.map