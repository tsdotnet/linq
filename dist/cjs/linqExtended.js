"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinqGrouping = exports.LinqExtended = void 0;
exports.default = linqExtended;
const tslib_1 = require("tslib");
const groupBy_1 = tslib_1.__importDefault(require("./transforms/groupBy"));
const select_1 = tslib_1.__importDefault(require("./transforms/select"));
const selectMany_1 = tslib_1.__importDefault(require("./transforms/selectMany"));
const LinqExtendedBase_1 = tslib_1.__importDefault(require("./LinqExtendedBase"));
class LinqExtended extends LinqExtendedBase_1.default {
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
        return this.transform((0, select_1.default)(selector));
    }
    selectMany(selector) {
        return this.transform((0, selectMany_1.default)(selector));
    }
    groupBy(keySelector) {
        return this
            .transform((0, groupBy_1.default)(keySelector))
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