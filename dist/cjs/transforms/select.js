"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = select;
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
//# sourceMappingURL=select.js.map