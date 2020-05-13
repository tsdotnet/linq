import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that returns a specified number of contiguous elements from the start of a sequence.
 */
export default function takeLast<T>(count: number): IterableFilter<T>;
