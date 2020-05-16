"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linq = void 0;
const tslib_1 = require("tslib");
const applyFilters_1 = tslib_1.__importDefault(require("./applyFilters"));
class Linq {
    constructor(source) {
        this.source = source;
    }
    [Symbol.iterator]() {
        return this.source[Symbol.iterator]();
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filter(...filters) {
        return filters.length ? this.filters(filters) : this;
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filters(filters) {
        return new Linq(applyFilters_1.default(this.source, filters));
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Linq<TResult>}
     */
    transform(transform) {
        return new Linq(transform(this.source));
    }
    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve(resolver) {
        return resolver(this.source);
    }
}
exports.Linq = Linq;
/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
function linq(source) {
    if (source instanceof Linq)
        return source;
    return new Linq(source);
}
exports.default = linq;
//# sourceMappingURL=linq.js.map