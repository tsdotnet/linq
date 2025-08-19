import where from './filters/where.js';
import applyFilters from './applyFilters.js';
import select from './transforms/select.js';
import selectMany from './transforms/selectMany.js';
import skip from './filters/skip.js';
import take from './filters/take.js';

class LinqBase {
    source;
    create;
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
        const s = applyFilters(source, filters);
        return s == source ? this : this.create(s);
    }
    where(predicate) {
        return this.filter(where(predicate));
    }
    resolve(resolver) {
        return resolver(this.source);
    }
    transform(transform) {
        return transform(this.source);
    }
    select(selector) {
        return select(selector)(this.source);
    }
    selectMany(selector) {
        return selectMany(selector)(this.source);
    }
    skip(count) {
        return this.filter(skip(count));
    }
    take(count) {
        return this.filter(take(count));
    }
}

export { LinqBase as default };
//# sourceMappingURL=LinqBase.js.map
