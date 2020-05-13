import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that returns all elements except for any in the exclusion sequence.
 * @param {Iterable} exclusions
 * @return {IterableFilter}
 */
export default function exclude<T>(exclusions: Iterable<T>): IterableFilter<T>;
