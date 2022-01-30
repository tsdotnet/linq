import where from './filters/where';
import applyFilters from './applyFilters';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import skip from './filters/skip';
import take from './filters/take';
export default class LinqBase {
    constructor(source, create) {
        this.source = source;
        this.create = create;
    }
    [Symbol.iterator]() {
        return this.source[Symbol.iterator]();
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filter(filter) {
        return this.create(filter(this.source));
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filterWith(...filters) {
        return filters.length === 0 ? this : this.applyFilters(filters);
    }
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    applyFilters(filters) {
        const source = this.source;
        const s = applyFilters(source, filters);
        return s == source ? this : this.create(s);
    }
    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {TLinq<T>}
     */
    where(predicate) {
        return this.filter(where(predicate));
    }
    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve(resolver) {
        return resolver(this.source);
    }
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Iterable<TResult>}
     */
    transform(transform) {
        return transform(this.source);
    }
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Iterable<TResult>}
     */
    select(selector) {
        return select(selector)(this.source);
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Iterable<TResult>}
     */
    selectMany(selector) {
        return selectMany(selector)(this.source);
    }
    /**
     * When resolving, skips the number of elements by the count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    skip(count) {
        return this.filter(skip(count));
    }
    /**
     * When resolving, takes no more than the number of elements by the provided count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    take(count) {
        return this.filter(take(count));
    }
}
//# sourceMappingURL=LinqBase.js.map