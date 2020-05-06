/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableTransform} from './pipe';

export type LinqTransform<TIn, TOut> = (source: Iterable<TIn>) => TOut;

export interface Linqable<T>
	extends Iterable<T>
{
	linq<TResult> (filter: LinqTransform<T, TResult>): TResult;
}

class Linq<TIn, TOut>
	implements Linqable<TOut>
{
	constructor (
		private readonly _source: Iterable<TIn>,
		private readonly _transform?: IterableTransform<TIn, TOut>)
	{
	}

	[Symbol.iterator] (): Iterator<TOut>
	{
		return this._transform(this._source)[Symbol.iterator]();
	}


	pipe<TResult> (filter: IterableTransform<TOut, TResult>): TResult
	{
		return new Linq<TOut, TResult>(this, filter);
	}

}

export default function linq<T, TResult> (
	source: Iterable<T>): Pipe<TResult> {
	return new PipeSource(source, filter);
}
