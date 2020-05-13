/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * An iterable filter that groups the elements of a sequence according to a specified key selector function and creates an iterable from each group and its key.
 */
export default function groupBy(keySelector) {
    return function* (sequence) {
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
            // Keep mapping next until a new key is discovered.
            do {
                next = mapNext();
            } while (next && !next.isFirstOf);
        }
        // If we made it all the way here, then all the results have been distributed.
        map.clear();
    };
}
class GroupingResult {
    constructor(key, elements) {
        this.key = key;
        this.elements = elements;
        Object.freeze(this);
    }
    [Symbol.iterator]() {
        return this.elements[Symbol.iterator]();
    }
}
//# sourceMappingURL=groupBy.js.map