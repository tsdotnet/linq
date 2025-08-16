/**!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 * @ignore
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./filters", "./iterables", "./linq", "./linqExtended", "./resolutions", "./transforms"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linqExtended = exports.transforms = exports.resolutions = exports.iterables = exports.filters = void 0;
    const tslib_1 = require("tslib");
    const filters = tslib_1.__importStar(require("./filters"));
    exports.filters = filters;
    const iterables = tslib_1.__importStar(require("./iterables"));
    exports.iterables = iterables;
    const linq_1 = tslib_1.__importDefault(require("./linq"));
    const linqExtended_1 = tslib_1.__importDefault(require("./linqExtended"));
    exports.linqExtended = linqExtended_1.default;
    const resolutions = tslib_1.__importStar(require("./resolutions"));
    exports.resolutions = resolutions;
    const transforms = tslib_1.__importStar(require("./transforms"));
    exports.transforms = transforms;
    exports.default = linq_1.default;
});
//# sourceMappingURL=index.js.map