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
        define(["require", "exports", "tslib", "../filters/distinct", "./merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = union;
    const tslib_1 = require("tslib");
    const distinct_1 = tslib_1.__importDefault(require("../filters/distinct"));
    const merge_1 = tslib_1.__importDefault(require("./merge"));
    /**
     * Produces the set union of all sequences provided..
     * @param {Iterable<T>} sequences
     * @return {Iterable<T>}
     */
    function union(...sequences) {
        return (0, distinct_1.default)((0, merge_1.default)(sequences));
    }
});
//# sourceMappingURL=union.js.map