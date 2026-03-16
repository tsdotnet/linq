"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = selectMany;
const tslib_1 = require("tslib");
const identity_js_1 = tslib_1.__importDefault(require("../identity.js"));
function selectMany(selector = identity_js_1.default) {
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
//# sourceMappingURL=selectMany.js.map