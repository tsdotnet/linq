/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

type NotUndefined<T> = T extends undefined ? never : T;

export default function isNotUndefined<T extends any> (e: T): e is NotUndefined<T> {
	return e!==undefined;
}
