/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

export interface IterableTransform<T, TResult>
{
	(e: Iterable<T>): TResult;
}

export type IterableValueTransform<TIn, TOut> = IterableTransform<TIn, Iterable<TOut>>;

export type IterableFilter<T> = IterableValueTransform<T, T>;
