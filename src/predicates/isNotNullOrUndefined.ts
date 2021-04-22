/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

export default function isNotNullOrUndefined<T extends any> (e: T): e is NonNullable<T> {
	return e!=null;
}
