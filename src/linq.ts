/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import applyFilters from './applyFilters';
import {IterableFilter, IterableTransform, IterableValueTransform} from './IterableTransform';

export class Linq<T>
	implements Iterable<T>
{
	constructor (
		protected readonly source: Iterable<T>)
	{
	}

	[Symbol.iterator] (): Iterator<T>
	{
		return this.source[Symbol.iterator]();
	}

	/**
	 * Returns a filtered sequence.
	 * Same effect as .transform(filter).
	 * @param {IterableValueTransform<T, TResult>} filter
	 * @return {Linq<TResult>}
	 */
	filter<TResult> (filter: IterableValueTransform<T, TResult>): Linq<TResult>;

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter<T>} filters The filters to use.
	 * @return {Linq<T>}
	 */
	filter (...filters: IterableFilter<T>[]): Linq<T>;

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter<T>} filters The filters to use.
	 * @return {Linq<T>}
	 */
	filter (...filters: IterableFilter<T>[]): Linq<T>
	{
		return filters.length ? this.filters(filters) : this;
	}

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter<T>} filters The filters to use.
	 * @return {Linq<T>}
	 */
	filters (filters: Iterable<IterableFilter<T>>): Linq<T>
	{
		return new Linq<T>(applyFilters(this.source, filters));
	}

	/**
	 * Returns a transformed sequence.
	 * @param {IterableValueTransform<T, TResult>} transform The transform to use.
	 * @return {Linq<TResult>}
	 */
	transform<TResult> (transform: IterableValueTransform<T, TResult>): Linq<TResult>
	{
		return new Linq(transform(this.source));
	}

	/**
	 * Applies a resolver to this sequence.
	 * @param {IterableTransform<T, TResolution>} resolver
	 * @return {TResolution}
	 */
	resolve<TResolution> (resolver: IterableTransform<T, TResolution>): TResolution
	{
		return resolver(this.source);
	}
}

/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq<T> (source: Iterable<T>): Linq<T> {
	if(source instanceof Linq) return source;
	return new Linq<T>(source);
}
