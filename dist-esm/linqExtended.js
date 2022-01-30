/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import groupBy from './transforms/groupBy';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import LinqExtendedBase from './LinqExtendedBase';
/**
 * Extended version of `Linq<T>` that includes common LINQ methods like `.where()` and `.select()` and `.groupBy()`.
 */
export class LinqExtended extends LinqExtendedBase {
    constructor(source) {
        super(source, source => new LinqExtended(source));
        this.source = source;
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
     * @return {LinqExtended<TResult>}
     */
    transform(transform) {
        return new LinqExtended(transform(this.source));
    }
    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {LinqExtended<TResult>}
     */
    select(selector) {
        return this.transform(select(selector));
    }
    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {LinqExtended<TResult>}
     */
    selectMany(selector) {
        return this.transform(selectMany(selector));
    }
    /**
     * Groups entries together by selected key.
     * @param {SelectorWithIndex<T, TKey>} keySelector
     * @return {LinqExtended<Grouping<TKey, T>>}
     */
    groupBy(keySelector) {
        return this
            .transform(groupBy(keySelector))
            .select(g => new LinqGrouping(g));
    }
}
export class LinqGrouping extends LinqExtended {
    constructor(grouping) {
        super(grouping.elements);
        this.key = grouping.key;
    }
}
/**
 * Returns a special extended version of Linq<T> which includes common operations like .where(predicate) .select(selector) and more with the consequence of a potentially larger footprint.
 * To minimize included modules use the standard version (linq) and import only the filters, transforms and resolutions needed.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linqExtended(source) {
    if (source instanceof LinqExtended)
        return source;
    return new LinqExtended(source);
}
//# sourceMappingURL=linqExtended.js.map