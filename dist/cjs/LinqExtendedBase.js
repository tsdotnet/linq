"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const LinqBase_1 = tslib_1.__importDefault(require("./LinqBase"));
const all_1 = tslib_1.__importDefault(require("./resolutions/all"));
const any_1 = tslib_1.__importDefault(require("./resolutions/any"));
const count_1 = tslib_1.__importDefault(require("./resolutions/count"));
const toArray_1 = tslib_1.__importDefault(require("./resolutions/toArray"));
const single_1 = tslib_1.__importDefault(require("./resolutions/single"));
const singleOrDefault_1 = tslib_1.__importDefault(require("./resolutions/singleOrDefault"));
const first_1 = tslib_1.__importDefault(require("./resolutions/first"));
const firstOrDefault_1 = tslib_1.__importDefault(require("./resolutions/firstOrDefault"));
const last_1 = tslib_1.__importDefault(require("./resolutions/last"));
const lastOrDefault_1 = tslib_1.__importDefault(require("./resolutions/lastOrDefault"));
class LinqExtendedBase extends LinqBase_1.default {
    constructor(source, create) {
        super(source, create);
    }
    toArray() {
        return (0, toArray_1.default)(this.source);
    }
    count(predicate) {
        return (0, count_1.default)(predicate ? this.where(predicate) : this.source);
    }
    any(predicate) {
        return (0, any_1.default)(predicate)(this.source);
    }
    all(predicate) {
        return (0, all_1.default)(predicate)(this.source);
    }
    single(predicate) {
        return (0, single_1.default)(predicate ? this.where(predicate) : this.source);
    }
    singleOrDefault(defaultValue, predicate) {
        return (0, singleOrDefault_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    singleOrUndefined(predicate) {
        return (0, singleOrDefault_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    singleOrNull(predicate) {
        return (0, singleOrDefault_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
    first(predicate) {
        return (0, first_1.default)(predicate ? this.where(predicate) : this.source);
    }
    firstOrDefault(defaultValue, predicate) {
        return (0, firstOrDefault_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    firstOrUndefined(predicate) {
        return (0, firstOrDefault_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    firstOrNull(predicate) {
        return (0, firstOrDefault_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
    last(predicate) {
        return (0, last_1.default)(predicate ? this.where(predicate) : this.source);
    }
    lastOrDefault(defaultValue, predicate) {
        return (0, lastOrDefault_1.default)(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    lastOrUndefined(predicate) {
        return (0, lastOrDefault_1.default)(undefined)(predicate ? this.where(predicate) : this.source);
    }
    lastOrNull(predicate) {
        return (0, lastOrDefault_1.default)(null)(predicate ? this.where(predicate) : this.source);
    }
}
exports.default = LinqExtendedBase;
//# sourceMappingURL=LinqExtendedBase.js.map