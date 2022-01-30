/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { PredicateWithIndex, SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from './IterableTransform';
import { LinqBase } from './linq';
import groupBy, { Grouping, GroupingResult } from './transforms/groupBy';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import defaultIfEmpty from './filters/defaultIfEmpty';
import where from './filters/where';
import all from './resolutions/all';
import any from './resolutions/any';
import count from './resolutions/count';
import toArray from './resolutions/toArray';
import single from './resolutions/single';
import singleOrDefault from './resolutions/singleOrDefault';
import first from './resolutions/first';
import firstOrDefault from './resolutions/firstOrDefault';
import last from './resolutions/last';
import lastOrDefault from './resolutions/lastOrDefault';

export abstract class LinqExtendedBase<T, TLinq extends LinqExtendedBase<T, TLinq>> extends LinqBase<T, TLinq> {
  /**
   * Returns a transformed sequence.
   * @param {IterableValueTransform<T, TResult>} transform The transform to use.
   * @return {LinqExtended<TResult>}
   */
  override transform<TResult>(transform: IterableValueTransform<T, TResult>): LinqExtended<TResult> {
    return linqExtended(transform(this.source));
  }

  /**
   * Projects each element of a sequence into a new form.
   * @param {SelectorWithIndex<T, TResult>} selector
   * @return {LinqExtended<TResult>}
   */
  override select<TResult>(selector: SelectorWithIndex<T, TResult>): LinqExtended<TResult> {
    return this.transform(select(selector));
  }

  /**
   * Projects each element of iterables as a flattened sequence of the selected.
   * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
   * @return {LinqExtended<TResult>}
   */
  override selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): LinqExtended<TResult> {
    return this.transform(selectMany(selector));
  }

  /**
   * Groups entries together by selected key.
   * @param {SelectorWithIndex<T, TKey>} keySelector
   * @return {LinqExtended<Grouping<TKey, T>>}
   */
  groupBy<TKey>(keySelector: SelectorWithIndex<T, TKey>): LinqExtended<LinqGrouping<TKey, T>> {
    return this.transform(groupBy(keySelector)).select((g) => new LinqGrouping<TKey, T>(g));
  }

  /**
   * Returns the elements of the specified sequence or the default value if the
   * sequence is empty.
   *
   * @param defaultValue The default value to be returned if this sequence is empty.
   * @returns The elements of the specified sequence or the default value if the sequence is empty.
   */
  defaultIfEmpty(defaultValue: T): TLinq {
    return this.create(defaultIfEmpty(defaultValue)(this.source));
  }

  /**
   * Returns all the entries in the sequence as a new array.
   * @return {T[]}
   */
  toArray(): T[] {
    return toArray(this.source);
  }

  /**
   * Returns the number of entries in a sequence.
   * If a predicate is provided, filters the count based upon the predicate.
   * Otherwise counts all the entries in the sequence.
   * @param {PredicateWithIndex<T>} predicate
   * @return {boolean}
   */
  count(predicate?: PredicateWithIndex<T>): number {
    return predicate ? count(where(predicate)(this.source)) : count(this.source);
  }

  /**
   * Returns true if the predicate ever returns true. Otherwise false.
   * If no predicate is provided, returns true if the sequence has any entries.
   * @param {PredicateWithIndex<T>} predicate
   * @return {boolean}
   */
  any(predicate?: PredicateWithIndex<T>): boolean {
    return any(predicate)(this.source);
  }

  /**
   * Returns false if the predicate ever returns false. Otherwise true.
   * @param {PredicateWithIndex<T>} predicate
   * @return {boolean}
   */
  all(predicate: PredicateWithIndex<T>): boolean {
    return all(predicate)(this.source);
  }

  /**
   * Returns the single element of the sequence.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The single element.
   * @throws If the (optionally filtered) sequence does not contain exactly one element.
   */
  single(predicate?: PredicateWithIndex<T>): T {
    return single(this.filterSequence(predicate));
  }

  /**
   * Returns the single element of the sequence or `null`, if the sequence is empty.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The single element or `null`.
   * @throws If the (optionally filtered) sequence contains more than one element.
   */
  singleOrDefault(predicate?: PredicateWithIndex<T>): T | null {
    return singleOrDefault<T>()(this.filterSequence(predicate)) ?? null;
  }

  /**
   * Returns the first element of the sequence.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The first element.
   * @throws If the (optionally filtered) sequence is empty.
   */
  first(predicate?: PredicateWithIndex<T>): T {
    return first(this.filterSequence(predicate));
  }

  /**
   * Returns the first element of the sequence or `null`, if the sequence is empty.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The first element or `null`.
   */
  firstOrDefault(predicate?: PredicateWithIndex<T>): T | null {
    return firstOrDefault<T>()(this.filterSequence(predicate)) ?? null;
  }

  /**
   * Returns the last element of the sequence.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The last element.
   * @throws If the (optionally filtered) sequence is empty.
   */
  last(predicate?: PredicateWithIndex<T>): T {
    return last(this.filterSequence(predicate));
  }

  /**
   * Returns the last element of the sequence or `null`, if the sequence is empty.
   * If a predicate is provided, filters the sequence based on the predicate.
   *
   * @param predicate The optional predicate.
   * @returns The last element or `null`.
   */
  lastOrDefault(predicate?: PredicateWithIndex<T>): T | null {
    return lastOrDefault<T>()(this.filterSequence(predicate)) ?? null;
  }

  /** @internal */
  private filterSequence(predicate?: PredicateWithIndex<T>): Iterable<T> {
    return predicate ? where(predicate)(this.source) : this.source;
  }
}

/**
 * Extended version of `Linq<T>` that includes common LINQ methods like `.where()` and `.select()` and `.groupBy()`.
 */
class LinqExtended<T> extends LinqExtendedBase<T, LinqExtended<T>> {
  constructor(source: Iterable<T>) {
    super(source, linqExtended);
  }
}

export class LinqGrouping<TKey, T> extends LinqExtended<T> implements Grouping<TKey, T> {
  readonly key: TKey;

  constructor(grouping: GroupingResult<TKey, T>) {
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
export default function linqExtended<T>(source: Iterable<T>): LinqExtended<T> {
  if (source instanceof LinqExtended) return source;
  return new LinqExtended<T>(source);
}
