import { IterableFilter } from '../IterableTransform';
/**
 * A iterable filter that returns the elements of the specified sequence or the specified value in a collection if the sequence is empty.
 */
export default function defaultIfEmpty<T>(defaultValue: T): IterableFilter<T>;
