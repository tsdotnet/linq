/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableFilter, IterableTransform} from './IterableTransform';

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

	filter (): this
	filter (...filters: IterableFilter<T>[]): Linq<T>
	filter (...filters: IterableFilter<T>[]): Linq<T> | this
	{
		if(!filters?.length) return this;
		let iterable = this._source;
		for(const filter of filters)
		{
			iterable = filter(iterable);
		}
		return new Linq<T>(iterable);
	}

	toArray (): T[]
	{
		const a: T[] = [];
		for(const e of this._source)
		{
			a.push(e);
		}
		return a;
	}

	resolve<TResolution> (resolution: IterableTransform<T, TResolution>): TResolution
	{
		return resolution(this._source);
	}
}

// export default function linq<T, TResult> (
// 	source: Iterable<T>): Pipe<TResult> {
// 	return new PipeSource(source, filter);
// }
