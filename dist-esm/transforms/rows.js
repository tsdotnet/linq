/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
/**
 * Returns the rows from a given set of iterables representing columns.
 */
export default function rows(columns) {
    if (!columns)
        throw new ArgumentNullException('columns');
    return {
        *[Symbol.iterator]() {
            var _a;
            const iterators = [];
            // first pass.
            let row = [], count = 0;
            for (const c of columns) {
                const i = c[Symbol.iterator]();
                const n = i.next();
                if (n.done) {
                    row.push(null);
                    iterators.push(null);
                }
                else {
                    count++;
                    row.push(n);
                    iterators.push(i);
                }
            }
            if (!count)
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
//# sourceMappingURL=rows.js.map