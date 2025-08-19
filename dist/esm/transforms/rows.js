import { ArgumentNullException } from '@tsdotnet/exceptions';

function rows(columns) {
    if (columns == null)
        throw new ArgumentNullException('columns');
    return {
        *[Symbol.iterator]() {
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
                    const n = iterators[i]?.next();
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

export { rows as default };
//# sourceMappingURL=rows.js.map
