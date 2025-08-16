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
        define(["require", "exports", "tslib", "@tsdotnet/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoize = void 0;
    const tslib_1 = require("tslib");
    const memoize_1 = tslib_1.__importDefault(require("@tsdotnet/memoize"));
    exports.memoize = memoize_1.default;
});
//# sourceMappingURL=memoize.js.map