/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export default interface Selector<T, TResult>
{
	(e: T, i: number): TResult;
}
