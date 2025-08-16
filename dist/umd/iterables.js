/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./iterables/concat", "./iterables/empty", "./iterables/iterateIndexes", "./iterables/merge", "./iterables/range", "./iterables/repeat", "./iterables/repeatSequence", "./iterables/unfold", "./iterables/union", "./iterables/zip"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zip = exports.union = exports.unfold = exports.repeatSequence = exports.repeat = exports.range = exports.merge = exports.iterateIndexes = exports.concat = exports.empty = void 0;
    const tslib_1 = require("tslib");
    const concat_1 = tslib_1.__importDefault(require("./iterables/concat"));
    exports.concat = concat_1.default;
    const empty_1 = tslib_1.__importDefault(require("./iterables/empty"));
    exports.empty = empty_1.default;
    const iterateIndexes_1 = tslib_1.__importDefault(require("./iterables/iterateIndexes"));
    exports.iterateIndexes = iterateIndexes_1.default;
    const merge_1 = tslib_1.__importDefault(require("./iterables/merge"));
    exports.merge = merge_1.default;
    const range_1 = tslib_1.__importDefault(require("./iterables/range"));
    exports.range = range_1.default;
    const repeat_1 = tslib_1.__importDefault(require("./iterables/repeat"));
    exports.repeat = repeat_1.default;
    const repeatSequence_1 = tslib_1.__importDefault(require("./iterables/repeatSequence"));
    exports.repeatSequence = repeatSequence_1.default;
    const unfold_1 = tslib_1.__importDefault(require("./iterables/unfold"));
    exports.unfold = unfold_1.default;
    const union_1 = tslib_1.__importDefault(require("./iterables/union"));
    exports.union = union_1.default;
    const zip_1 = tslib_1.__importDefault(require("./iterables/zip"));
    exports.zip = zip_1.default;
});
//# sourceMappingURL=iterables.js.map