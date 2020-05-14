import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 * @param {T} elements
 * @return {IterableFilter<T>}
 */
export default function prepend<T>(...elements: T[]): IterableFilter<T>;
