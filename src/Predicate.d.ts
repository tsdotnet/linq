/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export default interface Predicate<T>
{
	(e: T, i: number): boolean;
}
