import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param {T} entry The item to look for.
 * @return {IterableTransform<T, number>} The transform that will look for the provided item.
 */
export default function indexOf<T>(entry: T): IterableTransform<T, number>;
