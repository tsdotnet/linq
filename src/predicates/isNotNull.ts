/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

type NotNull<T> = T extends null ? never : T;

/* eslint-ignore */
export default function isNotNull<T = any> (e: T): e is NotNull<T> {
	return e!==null;
}
