/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 *  An iterable filter that merges the output of selected iterables.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function selectMany(selector) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const outer of sequence) {
                    for (const inner of selector(outer, i++))
                        yield inner;
                }
            }
        };
    };
}
//# sourceMappingURL=selectMany.js.map