"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linq = void 0;
exports.default = linq;
const tslib_1 = require("tslib");
const LinqBase_1 = tslib_1.__importDefault(require("./LinqBase"));
const select_1 = tslib_1.__importDefault(require("./transforms/select"));
const selectMany_1 = tslib_1.__importDefault(require("./transforms/selectMany"));
class Linq extends LinqBase_1.default {
    constructor(source) {
        super(source, source => new Linq(source));
        this.source = source;
    }
    [Symbol.iterator]() {
        return this.source[Symbol.iterator]();
    }
    filter(filter) {
        return super.filter(filter);
    }
    transform(transform) {
        return new Linq(transform(this.source));
    }
    select(selector) {
        return this.transform((0, select_1.default)(selector));
    }
    selectMany(selector) {
        return this.transform((0, selectMany_1.default)(selector));
    }
}
exports.Linq = Linq;
function linq(source) {
    if (source instanceof Linq)
        return source;
    return new Linq(source);
}
//# sourceMappingURL=linq.js.map