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
        define(["require", "exports", "tslib", "@tsdotnet/memoize", "./filters/append", "./filters/ascending", "./filters/buffer", "./filters/defaultIfEmpty", "./filters/descending", "./filters/distinct", "./filters/exclude", "./filters/ofType", "./filters/onComplete", "./filters/onError", "./filters/onStart", "./filters/orderBy", "./filters/orderUsing", "./filters/prepend", "./filters/reverse", "./filters/skip", "./filters/skipLast", "./filters/skipUntil", "./filters/skipWhile", "./filters/take", "./filters/takeLast", "./filters/takeUntil", "./filters/takeWhile", "./filters/where"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.where = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.reverse = exports.prepend = exports.orderUsing = exports.orderBy = exports.onStart = exports.onError = exports.onComplete = exports.ofType = exports.memoize = exports.exclude = exports.distinct = exports.descending = exports.defaultIfEmpty = exports.buffer = exports.ascending = exports.append = void 0;
    const tslib_1 = require("tslib");
    const memoize_1 = tslib_1.__importDefault(require("@tsdotnet/memoize"));
    exports.memoize = memoize_1.default;
    const append_1 = tslib_1.__importDefault(require("./filters/append"));
    exports.append = append_1.default;
    const ascending_1 = tslib_1.__importDefault(require("./filters/ascending"));
    exports.ascending = ascending_1.default;
    const buffer_1 = tslib_1.__importDefault(require("./filters/buffer"));
    exports.buffer = buffer_1.default;
    const defaultIfEmpty_1 = tslib_1.__importDefault(require("./filters/defaultIfEmpty"));
    exports.defaultIfEmpty = defaultIfEmpty_1.default;
    const descending_1 = tslib_1.__importDefault(require("./filters/descending"));
    exports.descending = descending_1.default;
    const distinct_1 = tslib_1.__importDefault(require("./filters/distinct"));
    exports.distinct = distinct_1.default;
    const exclude_1 = tslib_1.__importDefault(require("./filters/exclude"));
    exports.exclude = exclude_1.default;
    const ofType_1 = tslib_1.__importDefault(require("./filters/ofType"));
    exports.ofType = ofType_1.default;
    const onComplete_1 = tslib_1.__importDefault(require("./filters/onComplete"));
    exports.onComplete = onComplete_1.default;
    const onError_1 = tslib_1.__importDefault(require("./filters/onError"));
    exports.onError = onError_1.default;
    const onStart_1 = tslib_1.__importDefault(require("./filters/onStart"));
    exports.onStart = onStart_1.default;
    const orderBy_1 = tslib_1.__importDefault(require("./filters/orderBy"));
    exports.orderBy = orderBy_1.default;
    const orderUsing_1 = tslib_1.__importDefault(require("./filters/orderUsing"));
    exports.orderUsing = orderUsing_1.default;
    const prepend_1 = tslib_1.__importDefault(require("./filters/prepend"));
    exports.prepend = prepend_1.default;
    const reverse_1 = tslib_1.__importDefault(require("./filters/reverse"));
    exports.reverse = reverse_1.default;
    const skip_1 = tslib_1.__importDefault(require("./filters/skip"));
    exports.skip = skip_1.default;
    const skipLast_1 = tslib_1.__importDefault(require("./filters/skipLast"));
    exports.skipLast = skipLast_1.default;
    const skipUntil_1 = tslib_1.__importDefault(require("./filters/skipUntil"));
    exports.skipUntil = skipUntil_1.default;
    const skipWhile_1 = tslib_1.__importDefault(require("./filters/skipWhile"));
    exports.skipWhile = skipWhile_1.default;
    const take_1 = tslib_1.__importDefault(require("./filters/take"));
    exports.take = take_1.default;
    const takeLast_1 = tslib_1.__importDefault(require("./filters/takeLast"));
    exports.takeLast = takeLast_1.default;
    const takeUntil_1 = tslib_1.__importDefault(require("./filters/takeUntil"));
    exports.takeUntil = takeUntil_1.default;
    const takeWhile_1 = tslib_1.__importDefault(require("./filters/takeWhile"));
    exports.takeWhile = takeWhile_1.default;
    const where_1 = tslib_1.__importDefault(require("./filters/where"));
    exports.where = where_1.default;
});
//# sourceMappingURL=filters.js.map