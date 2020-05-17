"use strict";
/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
const InvalidOperationException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/InvalidOperationException"));
/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified `initialValue` is used as the initial accumulator value, and the specified function is used to select the result value.
 * If no `initialValue` is specified, the first entry in the sequence is used.
 * @param {(previous: (U | undefined), current: T, index: number) => U} reduction
 * @param {U} initialValue
 * @return {IterableTransform<T, U | undefined>}
 */
function aggregate(reduction, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new ArgumentNullException_1.default('sequence');
        let i = 0;
        if (initialValue === undefined) {
            const iterator = sequence[Symbol.iterator]();
            let n = iterator.next();
            if (n.done)
                throw new InvalidOperationException_1.default('Sequence is empty.  Specify an initial value allow for an empty iterable.');
            let previous = n.value;
            while (!(n = iterator.next()).done) {
                previous = reduction(previous, n.value, ++i);
            }
            return previous;
        }
        else {
            let previous = initialValue;
            for (const current of sequence)
                previous = reduction(previous, current, i++);
            return previous;
        }
    };
}
exports.default = aggregate;
//# sourceMappingURL=aggregate.js.map