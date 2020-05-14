import { IterableTransform } from '../IterableTransform';
/**
 * Returns an entry from a singular sequence or `undefined` if empty.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T>(): IterableTransform<T, T | undefined>;
/**
 * Returns an entry from a singular sequence or the default value if empty.
 * Throws if more than one entry.
 * @param {T} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function singleOrDefault<T>(defaultValue: T): IterableTransform<T, T>;
