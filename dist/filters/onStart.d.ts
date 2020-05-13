import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that invokes the provided action before iterating results.
 */
export default function onStart<T>(action: () => void): IterableFilter<T>;
