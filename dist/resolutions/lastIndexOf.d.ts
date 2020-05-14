import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} item
 * @return {IterableTransform<T, number>}
 */
export default function lastIndexOf<T>(item: T): IterableTransform<T, number>;
