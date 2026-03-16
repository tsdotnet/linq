"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinqGrouping = exports.LinqExtended = void 0;
exports.default = linqExtended;
const tslib_1 = require("tslib");
const groupBy_js_1 = tslib_1.__importDefault(require("./transforms/groupBy.js"));
const select_js_1 = tslib_1.__importDefault(require("./transforms/select.js"));
const selectMany_js_1 = tslib_1.__importDefault(require("./transforms/selectMany.js"));
const LinqExtendedBase_js_1 = tslib_1.__importDefault(require("./LinqExtendedBase.js"));
class LinqExtended extends LinqExtendedBase_js_1.default {
    constructor(source) {
        super(source, source => new LinqExtended(source));
        this.source = source;
    }
    filter(filter) {
        return super.filter(filter);
    }
    transform(transform) {
        return new LinqExtended(transform(this.source));
    }
    select(selector) {
        return this.transform((0, select_js_1.default)(selector));
    }
    selectMany(selector) {
        return this.transform((0, selectMany_js_1.default)(selector));
    }
    groupBy(keySelector) {
        return this
            .transform((0, groupBy_js_1.default)(keySelector))
            .select(g => new LinqGrouping(g));
    }
}
exports.LinqExtended = LinqExtended;
class LinqGrouping extends LinqExtended {
    constructor(grouping) {
        super(grouping.elements);
        this.key = grouping.key;
    }
}
exports.LinqGrouping = LinqGrouping;
function linqExtended(source) {
    if (source instanceof LinqExtended)
        return source;
    return new LinqExtended(source);
}
//# sourceMappingURL=linqExtended.js.map