"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const LinqBase_js_1 = tslib_1.__importDefault(require("./LinqBase.js"));
const all_js_1 = tslib_1.__importDefault(require("./resolutions/all.js"));
const any_js_1 = tslib_1.__importDefault(require("./resolutions/any.js"));
const count_js_1 = tslib_1.__importDefault(require("./resolutions/count.js"));
const toArray_js_1 = tslib_1.__importDefault(require("./resolutions/toArray.js"));
const single_js_1 = tslib_1.__importDefault(require("./resolutions/single.js"));
const singleOrDefault_js_1 = tslib_1.__importDefault(require("./resolutions/singleOrDefault.js"));
const first_js_1 = tslib_1.__importDefault(require("./resolutions/first.js"));
const firstOrDefault_js_1 = tslib_1.__importDefault(require("./resolutions/firstOrDefault.js"));
const last_js_1 = tslib_1.__importDefault(require("./resolutions/last.js"));
const lastOrDefault_js_1 = tslib_1.__importDefault(require("./resolutions/lastOrDefault.js"));
class LinqExtendedBase extends LinqBase_js_1.default {
    constructor(source, create) {
        super(source, create);
    }
    toArray() {
        return (0, toArray_js_1.default)(this.source);
    }
    count(predicate) {
        return (0, count_js_1.default)(predicate ? this.where(predicate) : this.source);
    }
    any(predicate) {
        return (0, any_js_1.default)(predicate)(this.source);
    }
    all(predicate) {
        return (0, all_js_1.default)(predicate)(this.source);
    }
    single(predicate) {
        return (0, single_js_1.default)(predicate ? this.where(predicate) : this.source);
    }
    singleOrDefault(defaultValue, predicate) {
        return (0, singleOrDefault_js_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    singleOrUndefined(predicate) {
        return (0, singleOrDefault_js_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    singleOrNull(predicate) {
        return (0, singleOrDefault_js_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
    first(predicate) {
        return (0, first_js_1.default)(predicate ? this.where(predicate) : this.source);
    }
    firstOrDefault(defaultValue, predicate) {
        return (0, firstOrDefault_js_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    firstOrUndefined(predicate) {
        return (0, firstOrDefault_js_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    firstOrNull(predicate) {
        return (0, firstOrDefault_js_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
    last(predicate) {
        return (0, last_js_1.default)(predicate ? this.where(predicate) : this.source);
    }
    lastOrDefault(defaultValue, predicate) {
        return (0, lastOrDefault_js_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    lastOrUndefined(predicate) {
        return (0, lastOrDefault_js_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    lastOrNull(predicate) {
        return (0, lastOrDefault_js_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
}
exports.default = LinqExtendedBase;
//# sourceMappingURL=LinqExtendedBase.js.map