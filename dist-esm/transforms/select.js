/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 *  An iterable filter that transforms (maps) the output from the contained elements.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function select(selector) {
    return function* (sequence) {
        let i = 0;
        for (const e of sequence) {
            yield selector(e, i++);
        }
    };
}
//# sourceMappingURL=select.js.map