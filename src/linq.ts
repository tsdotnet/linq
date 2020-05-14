/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter, IterableTransform, IterableValueTransform} from './IterableTransform';

export class Linq<T>
	implements Iterable<T>
{
	constructor (
		private readonly _source: Iterable<T>)
	{
	}

	[Symbol.iterator] (): Iterator<T>
	{
		return this._source[Symbol.iterator]();
	}

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter} filters The filters to use.
	 * @return {Linq}
	 */
	filter (...filters: IterableFilter<T>[]): Linq<T>
	{
		return filters.length ? this.filters(filters) : this;
	}

	/**
	 * Returns a filtered sequence.
	 * @param {IterableFilter} filters The filters to use.
	 * @return {Linq}
	 */
	filters (filters: Iterable<IterableFilter<T>>): Linq<T>
	{
		let iterable = this._source;
		for(const filter of filters)
		{
			iterable = filter(iterable);
		}
		return new Linq<T>(iterable);
	}

	/**
	 * Returns a transformed sequence.
	 * @param {IterableValueTransform} transform The transform to use.
	 * @return {Linq<TResult>}
	 */
	transform<TResult> (transform: IterableValueTransform<T, TResult>): Linq<TResult>
	{
		return new Linq(transform(this._source));
	}

	/**
	 * Applies a resolution to this sequence.
	 * @param {IterableTransform} resolution
	 * @return {TResolution}
	 */
	resolve<TResolution> (resolution: IterableTransform<T, TResolution>): TResolution
	{
		return resolution(this._source);
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
	return new Linq(source);
}
