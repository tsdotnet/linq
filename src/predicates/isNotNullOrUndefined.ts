/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

/* eslint-ignore */
export default function isNotNullOrUndefined<T = any> (e: T): e is NonNullable<T> {
	return e!=null;
}
