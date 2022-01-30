/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { PredicateWithIndex, SelectorWithIndex } from "@tsdotnet/common-interfaces";
import { IterableFilter, IterableTransform, IterableValueTransform } from "./IterableTransform";
import where from './filters/where';
import applyFilters from './applyFilters';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import skip from './filters/skip';
import take from './filters/take';

export default abstract class LinqBase<T, TLinq extends LinqBase<T, TLinq>>
    implements Iterable<T> {

    constructor(
        protected readonly source: Iterable<T>,
        protected readonly create: (source: Iterable<T>) => TLinq
    ) { }

    [Symbol.iterator](): Iterator<T> {
        return this.source[Symbol.iterator]();
    }

    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filter(filter: IterableFilter<T>): TLinq {
        return this.create(filter(this.source));
    }

    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    filterWith(...filters: IterableFilter<T>[]): TLinq {
        return filters.length === 0 ? <TLinq><unknown>this : this.applyFilters(filters);
    }

    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {TLinq<T>}
     */
    applyFilters(filters: Iterable<IterableFilter<T>>): TLinq {
        const source = this.source;
        const s = applyFilters(source, filters);
        return s == source ? <TLinq><unknown>this : this.create(s);
    }

    /**
     * Filters a sequence of values based on a predicate.
     * @param {PredicateWithIndex<T>} predicate
     * @return {TLinq<T>}
     */
    where(predicate: PredicateWithIndex<T>): TLinq {
        return this.filter(where(predicate));
    }

    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve<TResolution>(resolver: IterableTransform<T, TResolution>): TResolution {
        return resolver(this.source);
    }


    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Iterable<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Iterable<TResult> {
        return transform(this.source);
    }

    /**
     * Projects each element of a sequence into a new form.
     * @param {SelectorWithIndex<T, TResult>} selector
     * @return {Iterable<TResult>}
     */
    select<TResult>(selector: SelectorWithIndex<T, TResult>): Iterable<TResult> {
        return select(selector)(this.source);
    }

    /**
     * Projects each element of iterables as a flattened sequence of the selected.
     * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
     * @return {Iterable<TResult>}
     */
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Iterable<TResult> {
        return selectMany(selector)(this.source);
    }

    /**
     * When resolving, skips the number of elements by the count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    skip(count: number): TLinq {
        return this.filter(skip<T>(count));
    }

    /**
     * When resolving, takes no more than the number of elements by the provided count.
     * @param {number} count The number elements to skip.
     * @return {LinqExtended<T>}
     */
    take(count: number): TLinq {
        return this.filter(take(count));
    }
}
