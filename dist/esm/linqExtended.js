import groupBy from './transforms/groupBy.js';
import select from './transforms/select.js';
import selectMany from './transforms/selectMany.js';
import LinqExtendedBase from './LinqExtendedBase.js';

class LinqExtended extends LinqExtendedBase {
    source;
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
        return this.transform(select(selector));
    }
    selectMany(selector) {
        return this.transform(selectMany(selector));
    }
    groupBy(keySelector) {
        return this
            .transform(groupBy(keySelector))
            .select(g => new LinqGrouping(g));
    }
}
class LinqGrouping extends LinqExtended {
    key;
    constructor(grouping) {
        super(grouping.elements);
        this.key = grouping.key;
    }
}
function linqExtended(source) {
    if (source instanceof LinqExtended)
        return source;
    return new LinqExtended(source);
}

export { LinqExtended, LinqGrouping, linqExtended as default };
//# sourceMappingURL=linqExtended.js.map
