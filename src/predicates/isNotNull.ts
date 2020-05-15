/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

type NotNull<T> = T extends null ? never : T;

export default function isNotNull<T extends any> (e: T): e is NotNull<T> {
	return e!==null;
}
