/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import LinqBase from './LinqBase';
import { IterableFilter, IterableValueTransform } from './IterableTransform';
import select from './transforms/select';
import selectMany from './transforms/selectMany';
import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';

/**
 * Simplest abstraction for building an extensible iterable query.
 */
export class Linq<T> extends LinqBase<T, Linq<T>>
{
	constructor(
		protected readonly source: Iterable<T>) {
		super(source, source => new Linq(source));
	}

	[Symbol.iterator](): Iterator<T> {
		return this.source[Symbol.iterator]();
	}

	/**
	 * Returns a filtered sequence.
	 * Same effect as .transform(filter).
	 * @param {IterableValueTransform<T, TResult>} filter
	 * @return {Linq<TResult>}
	 */
	filter<TResult>(filter: IterableValueTransform<T, TResult>): Linq<TResult>;

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter<T>} filters The filters to use.
	 * @return {Linq<T>}
	 */
	filter(filter: IterableFilter<T>): Linq<T>;

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter<T>} filters The filters to use.
	 * @return {TLinq<T>}
	 */
	filter(filter: IterableFilter<T>): Linq<T> {
		return super.filter(filter);
	}

	/**
	 * Returns a transformed sequence.
	 * @param {IterableValueTransform<T, TResult>} transform The transform to use.
	 * @return {Linq<TResult>}
	 */
	transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult> {
		return new Linq(transform(this.source));
	}

	/**
	 * Projects each element of a sequence into a new form.
	 * @param {SelectorWithIndex<T, TResult>} selector
	 * @return {Linq<TResult>}
	 */
	select<TResult>(selector: SelectorWithIndex<T, TResult>): Linq<TResult> {
		return this.transform(select(selector));
	}

	/**
	 * Projects each element of iterables as a flattened sequence of the selected.
	 * @param {SelectorWithIndex<T, Iterable<TResult>>} selector
	 * @return {Linq<TResult>}
	 */
	selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Linq<TResult> {
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
export default function linq<T>(source: Iterable<T>): Linq<T> {
	if (source instanceof Linq) return source;
	return new Linq<T>(source);
}

