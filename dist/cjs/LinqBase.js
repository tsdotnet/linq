"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const where_js_1 = tslib_1.__importDefault(require("./filters/where.js"));
const applyFilters_js_1 = tslib_1.__importDefault(require("./applyFilters.js"));
const select_js_1 = tslib_1.__importDefault(require("./transforms/select.js"));
const selectMany_js_1 = tslib_1.__importDefault(require("./transforms/selectMany.js"));
const skip_js_1 = tslib_1.__importDefault(require("./filters/skip.js"));
const take_js_1 = tslib_1.__importDefault(require("./filters/take.js"));
class LinqBase {
    constructor(source, create) {
        this.source = source;
        this.create = create;
    }
    [Symbol.iterator]() {
        return this.source[Symbol.iterator]();
    }
    filter(filter) {
        return this.create(filter(this.source));
    }
    filterWith(...filters) {
        return filters.length === 0 ? this : this.applyFilters(filters);
    }
    applyFilters(filters) {
        const source = this.source;
        const s = (0, applyFilters_js_1.default)(source, filters);
        return s == source ? this : this.create(s);
    }
    where(predicate) {
        return this.filter((0, where_js_1.default)(predicate));
    }
    resolve(resolver) {
        return resolver(this.source);
    }
    transform(transform) {
        return transform(this.source);
    }
    select(selector) {
        return (0, select_js_1.default)(selector)(this.source);
    }
    selectMany(selector) {
        return (0, selectMany_js_1.default)(selector)(this.source);
    }
    skip(count) {
        return this.filter((0, skip_js_1.default)(count));
    }
    take(count) {
        return this.filter((0, take_js_1.default)(count));
    }
}
exports.default = LinqBase;
//# sourceMappingURL=LinqBase.js.map