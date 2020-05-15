"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ArgumentNullException_1 = tslib_1.__importDefault(require("@tsdotnet/exceptions/dist/ArgumentNullException"));
/**
 * A generator function for creating entries based upon the previous entry.
 * @param {T} seed The first value to be fed the valueFactory.
 * @param {SelectorWithIndex<T, T>} valueFactory
 * @param {boolean} skipSeed If false (default), the seed value is the first value returned.  Otherwise it is skipped.
 * @return {Iterable<T>}
 */
function unfold(seed, valueFactory, skipSeed = false) {
    if (!valueFactory)
        throw new ArgumentNullException_1.default('valueFactory');
    return {
        *[Symbol.iterator]() {
            if (!skipSeed)
                yield seed;
            let value = seed, i = skipSeed ? 0 : 1;
            while (true) {
                value = valueFactory(value, i++);
                yield value;
            }
        }
    };
}
exports.default = unfold;
//# sourceMappingURL=unfold.js.map