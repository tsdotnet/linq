"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Produces a sequence that is combination of the two sequences..
 * @param {Iterable<T1>} sequence1
 * @param {Iterable<T2>} sequence2
 * @param {(r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult} selector
 * @return {Iterable<TResult>}
 */
function zip(sequence1, sequence2, selector) {
    if (!sequence1)
        throw new ArgumentNullException_1.default('sequence1');
    if (!sequence2)
        throw new ArgumentNullException_1.default('sequence2');
    if (!selector)
        throw new ArgumentNullException_1.default('selector');
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
exports.default = zip;
//# sourceMappingURL=zip.js.map