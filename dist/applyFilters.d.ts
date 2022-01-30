/**
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import { IterableFilter } from './IterableTransform';
/**
 * Applies  a set of filters to a sequence.
 * @param {Iterable<T>} sequence The sequence to apply to.
 * @param {Iterable<IterableFilter<T>>} filters The filters to apply.
 * @return {Iterable<T>} The resultant sequence.
 */
export default function applyFilters<T>(sequence: Iterable<T>, filters: Iterable<IterableFilter<T>>): Iterable<T>;
