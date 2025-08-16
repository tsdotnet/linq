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
        define(["require", "exports", "tslib", "./merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = concat;
    const tslib_1 = require("tslib");
    const merge_1 = tslib_1.__importDefault(require("./merge"));
    /**
     * Concatenates the provided sequences.
     * @param {Iterable<T>} sequences
     * @return {Iterable<T>}
     */
    function concat(...sequences) {
        return (0, merge_1.default)(sequences);
    }
});
//# sourceMappingURL=concat.js.map