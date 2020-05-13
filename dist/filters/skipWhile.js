"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An iterable filter that bypasses elements in sequence while the predicate condition is true and if false will iterate the rest.
 * Inverse of skipUntil.
 */
function skipWhile(predicate) {
    return function* (sequence) {
        let i = 0, skipped = false;
        for (const e of sequence) {
            if (skipped || !predicate(e, i)) {
                skipped = true;
                yield e;
            }
            i++;
        }
    };
}
exports.default = skipWhile;
//# sourceMappingURL=skipWhile.js.map