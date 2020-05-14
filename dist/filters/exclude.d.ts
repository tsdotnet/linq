import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that returns all elements except for any in the exclusion sequence.
 * @param {Iterable<T>} exclusions
 * @return {IterableFilter<T>}
 */
export default function exclude<T>(exclusions: Iterable<T>): IterableFilter<T>;
