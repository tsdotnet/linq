/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import LinqBase from "./LinqBase";
import where from './filters/where';
import all from './resolutions/all';
import any from './resolutions/any';
import count from './resolutions/count';
import toArray from './resolutions/toArray';
import single from './resolutions/single';
import first from './resolutions/first';
import firstOrDefault from './resolutions/firstOrDefault';
import last from './resolutions/last';
import lastOrDefault from './resolutions/lastOrDefault';

export default abstract class LinqResolverBase<T, TLinq extends LinqResolverBase<T, TLinq>>
	extends LinqBase<T, TLinq>
{
	constructor(
		source: Iterable<T>,
		create: (source: Iterable<T>) => TLinq) {
		super(source, create);
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
		return predicate
			? count(where(predicate)(this.source))
			: count(this.source);
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
	 * Returns the expected single element; otherwise throws an InvalidOperationException.
	 */
	single(): T {
		return single(this.source);
	}

	/**
	 * Returns the expected single element; otherwise undefined.
	 */
	singleOrDefault(): T | undefined
	singleOrDefault(defaultValue: T): T
	singleOrDefault(defaultValue?: T): T | undefined {
		return firstOrDefault(defaultValue)(this.source);
	}

	/**
	 * Returns the first element of a sequence.
	 */
	first(): T {
		return first(this.source);
	}

	/**
	 * Returns the first element of a sequence or the default value if no element is found.
	 */
	firstOrDefault(): T | undefined
	firstOrDefault(defaultValue: T): T
	firstOrDefault(defaultValue?: T): T | undefined {
		return firstOrDefault(defaultValue)(this.source);
	}

	/**
	 * Returns the last element of a sequence.
	 */
	last(): T {
		return last(this.source);
	}

	/**
	 * Returns the first element of a sequence or the default value if no element is found.
	 */
	lastOrDefault(): T | undefined
	lastOrDefault(defaultValue: T): T
	lastOrDefault(defaultValue?: T): T | undefined {
		return lastOrDefault(defaultValue)(this.source);
	}
}