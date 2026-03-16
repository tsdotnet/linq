"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = skip;
const tslib_1 = require("tslib");
const empty_js_1 = tslib_1.__importDefault(require("../iterables/empty.js"));
const same_js_1 = tslib_1.__importDefault(require("./same.js"));
function skip(count) {
    if (isNaN(count) || count <= 0)
        return same_js_1.default;
    if (!isFinite(count))
        return empty_js_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = count; i < len; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    if (0 < remain--)
                        continue;
                    yield e;
                }
            }
        };
    };
}
//# sourceMappingURL=skip.js.map