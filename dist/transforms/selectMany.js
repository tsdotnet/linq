"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const identity_1 = tslib_1.__importDefault(require("../identity"));
function selectMany(selector = identity_1.default) {
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