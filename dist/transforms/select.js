"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that transforms (maps / projects) the output from the contained elements.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
function select(selector) {
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
exports.default = select;
//# sourceMappingURL=select.js.map