/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

groupJoin<TInner, TKey, TResult>(
	inner:FiniteEnumerableOrArrayLike<TInner>,
	outerKeySelector:Selector<T, TKey>,
	innerKeySelector:Selector<TInner, TKey>,
	resultSelector:(outer:T, inner:TInner[] | null) => TResult,
	compareSelector:HashSelector<TKey> = <any>Functions.Identity)
