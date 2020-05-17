/**
 * @packageDocumentation
 * @module filters
 */
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 * @param {() => void} action
 * @return {IterableFilter<T>}
 */
export default function onComplete<T>(action: () => void): IterableFilter<T>;
