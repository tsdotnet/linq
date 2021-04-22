import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that returns everything from the sequence except the last count of items.
 * @param {number} count
 * @return {IterableFilter<T>}
 */
export default function skipLast<T>(count: number): IterableFilter<T>;
