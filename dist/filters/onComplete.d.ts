import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that invokes the provided action if there are no more entries to iterate.
 */
export default function onComplete<T>(action: () => void): IterableFilter<T>;
