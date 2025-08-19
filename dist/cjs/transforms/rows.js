"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rows;
const exceptions_1 = require("@tsdotnet/exceptions");
function rows(columns) {
    if (columns == null)
        throw new exceptions_1.ArgumentNullException('columns');
    return {
        *[Symbol.iterator]() {
            var _a;
            const iterators = [];
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
                return;
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