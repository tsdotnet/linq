"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = unfold;
const exceptions_1 = require("@tsdotnet/exceptions");
function unfold(seed, valueFactory, skipSeed = false) {
    if (!valueFactory)
        throw new exceptions_1.ArgumentNullException('valueFactory');
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
//# sourceMappingURL=unfold.js.map