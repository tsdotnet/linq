export interface Pipe<T>
	extends Iterable<T>
{
	pipe<TResult> (filter: IterableTransform<T, TResult>): Pipe<TResult>;
}

export type IterableTransform<TIn, TOut> = (source: Iterable<TIn>) => Iterable<TOut>;
export type Filter<T> = IterableTransform<T, T>;

export default function pipe<T, TResult> (
	source: Iterable<T>, filter: IterableTransform<T, TResult>): Pipe<TResult> {
	return new PipeSource(source, filter);
}

export function map<T, TResult> (selector: Selector<T, TResult>): IterableTransform<T, TResult>
{
	return function* (source: Iterable<T>): Iterable<TResult> {
		let i = 0;
		for(const e of source)
		{
			yield selector(e, i++);
		}
	};
}

export function filter<T> (predicate: Predicate<T>): Filter<T>
{
	return function* (source: Iterable<T>): Iterable<T> {
		let i = 0;
		for(const e of source)
		{
			if(predicate(e, i++)) yield e;
		}
	};
}

/*

    Array.prototype.indexOf
    Array.prototype.lastIndexOf
    Array.prototype.every
    Array.prototype.some
    Array.prototype.reduce
    Array.prototype.reduceRight

 */

class PipeSource<TIn, TOut>
	implements Pipe<TOut>
{
	constructor (
		private readonly _source: Iterable<TIn>,
		private readonly _transform: IterableTransform<TIn, TOut>)
	{
	}

	[Symbol.iterator] (): Iterator<TOut>
	{
		return this._transform(this._source)[Symbol.iterator]();
	}


	pipe<TResult> (filter: IterableTransform<TOut, TResult>): Pipe<TResult>
	{
		return new PipeSource<TOut, TResult>(this, filter);
	}

}
