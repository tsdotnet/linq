"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  An iterable filter that merges the output of selected iterables.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
function selectMany(selector) {
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
exports.default = selectMany;
//# sourceMappingURL=selectMany.js.map