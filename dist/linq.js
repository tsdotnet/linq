"use strict";
/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linq = void 0;
class Linq {
    constructor(_source) {
        this._source = _source;
    }
    [Symbol.iterator]() {
        return this._source[Symbol.iterator]();
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter} filters The filters to use.
     * @return {Linq}
     */
    filter(...filters) {
        return filters.length ? this.filters(filters) : this;
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter} filters The filters to use.
     * @return {Linq}
     */
    filters(filters) {
        let iterable = this._source;
        for (const filter of filters) {
            iterable = filter(iterable);
        }
        return new Linq(iterable);
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform} transform The transform to use.
     * @return {Linq<TResult>}
     */
    transform(transform) {
        return new Linq(transform(this._source));
    }
    /**
     * Applies a resolution to this sequence.
     * @param {IterableTransform} resolution
     * @return {TResolution}
     */
    resolve(resolution) {
        return resolution(this._source);
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
    return new Linq(source);
}
exports.default = linq;
//# sourceMappingURL=linq.js.map