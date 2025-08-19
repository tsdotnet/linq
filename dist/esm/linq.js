import LinqBase from './LinqBase.js';
import select from './transforms/select.js';
import selectMany from './transforms/selectMany.js';

class Linq extends LinqBase {
    source;
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
        return this.transform(select(selector));
    }
    selectMany(selector) {
        return this.transform(selectMany(selector));
    }
}
function linq(source) {
    if (source instanceof Linq)
        return source;
    return new Linq(source);
}

export { Linq, linq as default };
//# sourceMappingURL=linq.js.map
