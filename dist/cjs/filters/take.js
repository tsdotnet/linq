"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = take;
const tslib_1 = require("tslib");
const empty_js_1 = tslib_1.__importDefault(require("../iterables/empty.js"));
const same_js_1 = tslib_1.__importDefault(require("./same.js"));
function take(count) {
    if (count <= 0)
        return empty_js_1.default;
    if (!isFinite(count))
        return same_js_1.default;
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    count = Math.min(count, len);
                    for (let i = 0; i < count; i++) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                let remain = count;
                for (const e of sequence) {
                    yield e;
                    if (--remain <= 0)
                        break;
                }
            }
        };
    };
}
//# sourceMappingURL=take.js.map