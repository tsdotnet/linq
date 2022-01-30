/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { PredicateWithIndex, SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter, IterableTransform, IterableValueTransform } from './IterableTransform';
import where from './filters/where';
import applyFilters from './applyFilters';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import skip from './filters/skip';
import take from './filters/take';

export abstract class LinqBase<T, TLinq extends LinqBase<T, TLinq>> implements Iterable<T> {
  constructor(protected readonly source: Iterable<T>, protected readonly create: (source: Iterable<T>) => TLinq) {}

  [Symbol.iterator](): Iterator<T> {
    return this.source[Symbol.iterator]();
  }

  /**
   * Returns a filtered sequence.
   * @param {IterableFilter<T>} filters The filters to use.
   * @return {TLinq<T>}
   */
  filter(...filters: IterableFilter<T>[]): TLinq {
    return this.applyFilters(filters);
  }

  /**
   * Returns a filtered sequence.
   * @param {IterableFilter<T>} filters The filters to use.
   * @return {TLinq<T>}
   */
  applyFilters(filters: Iterable<IterableFilter<T>>): TLinq {
    return this.create(applyFilters(this.source, filters));
  }

  /**
   * Returns a transformed sequence.
   * @param {IterableValueTransform<T, TResult>} transform The transform to use.
   * @return {Iterable<TResult>}
   */
  transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult> {
    return linq(transform(this.source));
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
   * Filters a sequence of values based on a predicate.
   * @param {PredicateWithIndex<T>} predicate
   * @return {TLinq<T>}
   */
  where(predicate: PredicateWithIndex<T>): TLinq {
    return this.filter(where(predicate));
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

  /**
   * Projects each element of a sequence into a new form.
   * @param {SelectorWithIndex<T, TResult>} selector
   * @return {Iterable<TResult>}
   */
  select<TResult>(selector: SelectorWithIndex<T, TResult>): Linq<TResult> {
    return linq(select(selector)(this.source));
  }

  /**
   * Projects each element of iterables as a flattened sequence of the selected.
   * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
   * @return {Iterable<TResult>}
   */
  selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Linq<TResult> {
    return linq(selectMany(selector)(this.source));
  }
}

/**
 * Simplest abstraction for building an extensible iterable query.
 */
export class Linq<T> extends LinqBase<T, Linq<T>> {
  constructor(source: Iterable<T>) {
    super(source, linq);
  }
}

/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq<T>(source: Iterable<T>): Linq<T> {
  if (source instanceof Linq) return source;
  return new Linq<T>(source);
}
