import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the provided sequence contains the value. Otherwise false.
 * @param item The item to look for.
 * @return {IterableTransform} The transform that will look for the provided item.
 */
export default function contains<T>(item: T): IterableTransform<T, boolean>;
