import same from './same.js';

function exclude(exclusions) {
    if (!exclusions)
        return same;
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

export { exclude as default };
//# sourceMappingURL=exclude.js.map
