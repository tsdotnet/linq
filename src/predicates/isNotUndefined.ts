/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

type NotUndefined<T> = T extends undefined ? never : T;

/* eslint-ignore */
export default function isNotUndefined<T = any> (e: T): e is NotUndefined<T> {
	return e!==undefined;
}
