/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "../identity"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = selectMany;
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
});
//# sourceMappingURL=selectMany.js.map