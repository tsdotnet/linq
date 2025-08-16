/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import LinqBase from './LinqBase';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
/**
 * Simplest abstraction for building an extensible iterable query.
 */
export class Linq extends LinqBase {
    source;
    constructor(source) {
        super(source, source => new Linq(source));
        this.source = source;
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
        return super.filter(filter);
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
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Linq<TResult>}
     */
    select(selector) {
        return this.transform(select(selector));
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Linq<TResult>}
     */
    selectMany(selector) {
        return this.transform(selectMany(selector));
    }
}
/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq(source) {
    if (source instanceof Linq)
        return source;
    return new Linq(source);
}
//# sourceMappingURL=linq.js.map