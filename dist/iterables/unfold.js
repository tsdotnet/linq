"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A generator function for creating entries based upon the previous entry.
 * @param seed The first value to be fed the valueFactory.
 * @param {SelectorWithIndex} valueFactory
 * @param {boolean} skipSeed If false (default), the seed value is the first value returned.  Otherwise it is skipped.
 * @return {Iterable}
 */
function* unfold(seed, valueFactory, skipSeed = false) {
    if (!skipSeed)
        yield seed;
    let value = seed, i = skipSeed ? 0 : 1;
    while (true) {
        value = valueFactory(value, i++);
        yield value;
    }
}
exports.default = unfold;
//# sourceMappingURL=unfold.js.map