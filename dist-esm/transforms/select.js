/**
 * @packageDocumentation
 * @module transforms
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
/**
 * An iterable filter that transforms (maps / projects) the output from the contained elements.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function select(selector) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    yield selector(e, i++);
                }
            }
        };
    };
}
//# sourceMappingURL=select.js.map