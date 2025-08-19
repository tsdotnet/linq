function groupBy(keySelector) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const map = new Map(), iterator = sequence[Symbol.iterator]();
                let i = 0;
                function mapNext() {
                    const next = iterator.next();
                    if (next.done)
                        return null;
                    const e = next.value;
                    const key = keySelector(e, i++);
                    let elements = map.get(key);
                    const isFirstOf = !elements;
                    if (!elements)
                        map.set(key, elements = []);
                    elements.push(e);
                    return { key, elements, isFirstOf };
                }
                let next = mapNext();
                while (next) {
                    const { key, elements } = next;
                    yield new GroupingResult(key, {
                        *[Symbol.iterator]() {
                            let n = 0;
                            while (n < elements.length || next) {
                                if (n < elements.length)
                                    yield elements[n++];
                                else if (next)
                                    next = mapNext();
                            }
                        }
                    });
                    do {
                        next = mapNext();
                    } while (next && !next.isFirstOf);
                }
                map.clear();
            }
        };
    };
}
class GroupingResult {
    key;
    elements;
    constructor(key, elements) {
        this.key = key;
        this.elements = elements;
        Object.freeze(this);
    }
    [Symbol.iterator]() {
        return this.elements[Symbol.iterator]();
    }
}

export { GroupingResult, groupBy as default };
//# sourceMappingURL=groupBy.js.map
