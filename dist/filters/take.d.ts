import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function take<T>(count: number): IterableFilter<T>;
