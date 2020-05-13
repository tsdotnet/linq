"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a sequence that contains one repeated value.
 */
function* repeat(item, count = Infinity) {
    for (let i = 0; i < count; i++)
        yield item;
}
exports.default = repeat;
//# sourceMappingURL=repeat.js.map