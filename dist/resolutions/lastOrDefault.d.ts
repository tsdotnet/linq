import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that returns the last element of a sequence, or `undefined` if no element is found.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function lastOrDefault<T>(): IterableTransform<T, T | undefined>;
/**
 * An iterable transform that returns the last element of a sequence, or the default value if no element is found.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function lastOrDefault<T>(defaultValue: T): IterableTransform<T, T>;
