"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = aggregate;
const exceptions_1 = require("@tsdotnet/exceptions");
const exceptions_2 = require("@tsdotnet/exceptions");
function aggregate(reducer, initialValue) {
    return function (sequence) {
        if (!sequence)
            throw new exceptions_1.ArgumentNullException('sequence');
        let i = 0;
        if (initialValue === undefined) {
            const iterator = sequence[Symbol.iterator]();
            let n = iterator.next();
            if (n.done)
                throw new exceptions_2.InvalidOperationException('Sequence is empty.  Specify an initial value allow for an empty iterable.');
            let previous = n.value;
            while (!(n = iterator.next()).done) {
                previous = reducer(previous, n.value, ++i);
            }
            return previous;
        }
        else {
            let previous = initialValue;
            for (const current of sequence)
                previous = reducer(previous, current, i++);
            return previous;
        }
    };
}
//# sourceMappingURL=aggregate.js.map