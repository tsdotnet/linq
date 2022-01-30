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
import singleOrDefault from './resolutions/singleOrDefault';
import first from './resolutions/first';
import firstOrDefault from './resolutions/firstOrDefault';
import last from './resolutions/last';
import lastOrDefault from './resolutions/lastOrDefault';

export default abstract class LinqExtendedBase<T, TLinq extends LinqExtendedBase<T, TLinq>>
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
	 * Returns true if the predicate ever returns true; otherwise false.
	 * If no predicate is provided, returns true if the sequence has any entries.
	 * @param {PredicateWithIndex<T>} predicate
	 * @return {boolean}
	 */
	any(predicate?: PredicateWithIndex<T>): boolean {
		return any(predicate)(this.source);
	}

	/**
	 * Returns false if the predicate ever returns false; otherwise true.
	 * @param {PredicateWithIndex<T>} predicate
	 * @return {boolean}
	 */
	all(predicate: PredicateWithIndex<T>): boolean {
		return all(predicate)(this.source);
	}

	/**
	 * Returns the expected single element; otherwise throws an InvalidOperationException.
	 */
	single(predicate?: PredicateWithIndex<T>): T {
		return single(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the expected single element; otherwise the provided default value.
	 */
	singleOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T {
		return singleOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the expected single element; otherwise undefined.
	 */
	singleOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined {
		return singleOrDefault<T | undefined>(undefined)(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the first element of the sequence.
	 */
	first(predicate?: PredicateWithIndex<T>): T {
		return first(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the first element of the sequence or the default value if no element is found.
	 */
	firstOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T {
		return firstOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the first element of the sequence; otherwise undefined.
	 */
	firstOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined {
		return firstOrDefault<T | undefined>(undefined)(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the last element of the sequence.
	 */
	last(predicate?: PredicateWithIndex<T>): T {
		return last(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the last element of the sequence or the default value if no element is found.
	 */
	lastOrDefault(defaultValue: T, predicate?: PredicateWithIndex<T>): T {
		return lastOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
	}

	/**
	 * Returns the last element of the sequence; otherwise undefined.
	 */
	lastOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined {
		return lastOrDefault<T | undefined>(undefined)(predicate ? this.where(predicate) : this.source);
	}
}