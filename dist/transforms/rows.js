"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = (0, tslib_1.__importDefault)(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * Returns the rows from a given set of iterables representing columns.
 * @param {Iterable<Iterable<T>>} columns
 * @return {Iterable<Row<T>>}
 */
function rows(columns) {
    if (columns == null)
        throw new ArgumentNullException_1.default('columns');
    return {
        *[Symbol.iterator]() {
            var _a;
            const iterators = [];
            // first pass.
            let row = [], count = 0;
            for (const c of columns) {
                const i = c[Symbol.iterator]();
                const n = i.next();
                if (n.done == true) {
                    row.push(null);
                    iterators.push(null);
                }
                else {
                    count++;
                    row.push(n);
                    iterators.push(i);
                }
            }
            if (count == 0)
                return; // no rows.
            yield row;
            const len = iterators.length;
            do {
                row = [];
                count = 0;
                for (let i = 0; i < len; i++) {
                    const n = (_a = iterators[i]) === null || _a === void 0 ? void 0 : _a.next();
                    if (!n) {
                        row.push(null);
                    }
                    else if (n.done) {
                        row.push(null);
                        iterators[i] = null;
                    }
                    else {
                        row.push(n);
                        count++;
                    }
                }
                if (count)
                    yield row;
            } while (count);
        }
    };
}
exports.default = rows;
//# sourceMappingURL=rows.js.map