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
        define(["require", "exports", "tslib", "./resolutions/aggregate", "./resolutions/all", "./resolutions/any", "./resolutions/asArray", "./resolutions/average", "./resolutions/contains", "./resolutions/count", "./resolutions/elementAt", "./resolutions/elementAtOrDefault", "./resolutions/first", "./resolutions/firstOrDefault", "./resolutions/hasAny", "./resolutions/indexOf", "./resolutions/isEmpty", "./resolutions/joinStrings", "./resolutions/last", "./resolutions/lastIndexOf", "./resolutions/lastOrDefault", "./resolutions/max", "./resolutions/min", "./resolutions/product", "./resolutions/sequenceEqual", "./resolutions/single", "./resolutions/singleOrDefault", "./resolutions/sum", "./resolutions/sumAndCount", "./resolutions/toArray", "./resolutions/toMap"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toMap = exports.toArray = exports.asArray = exports.sumAndCount = exports.sum = exports.singleOrDefault = exports.single = exports.sequenceEqual = exports.product = exports.max = exports.min = exports.lastOrDefault = exports.lastIndexOf = exports.last = exports.joinStrings = exports.isEmpty = exports.indexOf = exports.hasAny = exports.firstOrDefault = exports.first = exports.elementAtOrDefault = exports.elementAt = exports.count = exports.contains = exports.average = exports.any = exports.all = exports.aggregate = void 0;
    const tslib_1 = require("tslib");
    const aggregate_1 = tslib_1.__importDefault(require("./resolutions/aggregate"));
    exports.aggregate = aggregate_1.default;
    const all_1 = tslib_1.__importDefault(require("./resolutions/all"));
    exports.all = all_1.default;
    const any_1 = tslib_1.__importDefault(require("./resolutions/any"));
    exports.any = any_1.default;
    const asArray_1 = tslib_1.__importDefault(require("./resolutions/asArray"));
    exports.asArray = asArray_1.default;
    const average_1 = tslib_1.__importDefault(require("./resolutions/average"));
    exports.average = average_1.default;
    const contains_1 = tslib_1.__importDefault(require("./resolutions/contains"));
    exports.contains = contains_1.default;
    const count_1 = tslib_1.__importDefault(require("./resolutions/count"));
    exports.count = count_1.default;
    const elementAt_1 = tslib_1.__importDefault(require("./resolutions/elementAt"));
    exports.elementAt = elementAt_1.default;
    const elementAtOrDefault_1 = tslib_1.__importDefault(require("./resolutions/elementAtOrDefault"));
    exports.elementAtOrDefault = elementAtOrDefault_1.default;
    const first_1 = tslib_1.__importDefault(require("./resolutions/first"));
    exports.first = first_1.default;
    const firstOrDefault_1 = tslib_1.__importDefault(require("./resolutions/firstOrDefault"));
    exports.firstOrDefault = firstOrDefault_1.default;
    const hasAny_1 = tslib_1.__importDefault(require("./resolutions/hasAny"));
    exports.hasAny = hasAny_1.default;
    const indexOf_1 = tslib_1.__importDefault(require("./resolutions/indexOf"));
    exports.indexOf = indexOf_1.default;
    const isEmpty_1 = tslib_1.__importDefault(require("./resolutions/isEmpty"));
    exports.isEmpty = isEmpty_1.default;
    const joinStrings_1 = require("./resolutions/joinStrings");
    Object.defineProperty(exports, "joinStrings", { enumerable: true, get: function () { return joinStrings_1.joinStrings; } });
    const last_1 = tslib_1.__importDefault(require("./resolutions/last"));
    exports.last = last_1.default;
    const lastIndexOf_1 = tslib_1.__importDefault(require("./resolutions/lastIndexOf"));
    exports.lastIndexOf = lastIndexOf_1.default;
    const lastOrDefault_1 = tslib_1.__importDefault(require("./resolutions/lastOrDefault"));
    exports.lastOrDefault = lastOrDefault_1.default;
    const max_1 = tslib_1.__importDefault(require("./resolutions/max"));
    exports.max = max_1.default;
    const min_1 = tslib_1.__importDefault(require("./resolutions/min"));
    exports.min = min_1.default;
    const product_1 = tslib_1.__importDefault(require("./resolutions/product"));
    exports.product = product_1.default;
    const sequenceEqual_1 = tslib_1.__importDefault(require("./resolutions/sequenceEqual"));
    exports.sequenceEqual = sequenceEqual_1.default;
    const single_1 = tslib_1.__importDefault(require("./resolutions/single"));
    exports.single = single_1.default;
    const singleOrDefault_1 = tslib_1.__importDefault(require("./resolutions/singleOrDefault"));
    exports.singleOrDefault = singleOrDefault_1.default;
    const sum_1 = tslib_1.__importDefault(require("./resolutions/sum"));
    exports.sum = sum_1.default;
    const sumAndCount_1 = tslib_1.__importDefault(require("./resolutions/sumAndCount"));
    exports.sumAndCount = sumAndCount_1.default;
    const toArray_1 = tslib_1.__importDefault(require("./resolutions/toArray"));
    exports.toArray = toArray_1.default;
    const toMap_1 = tslib_1.__importDefault(require("./resolutions/toMap"));
    exports.toMap = toMap_1.default;
});
//# sourceMappingURL=resolutions.js.map