import { IterableTransform } from '../IterableTransform';
/**
 * Returns an entry from a singular sequence or `undefined` if empty.
 * @return {IterableTransform<T, T | undefined>}
 */
export default function singleOrDefault<T>(): IterableTransform<T, T | undefined>;
/**
 * Returns an entry from a singular sequence or the default value if empty.
 * Throws if more than one entry.
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T>}
 */
export default function singleOrDefault<T, TDefault>(defaultValue: TDefault): IterableTransform<T, T | TDefault>;
