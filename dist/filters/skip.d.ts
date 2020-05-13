import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that bypasses a specified number of elements in a sequence and then returns the remaining elements.
 */
export default function skip<T>(count: number): IterableFilter<T>;
