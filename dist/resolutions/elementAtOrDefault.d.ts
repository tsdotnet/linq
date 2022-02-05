import { IterableTransform } from '../IterableTransform';
/**
 * Produces a function that returns the element at a specified index in a sequence or `undefined` if out of bounds.
 * @param {number} index
 * @return {IterableTransform<T, T | undefined>}
 */
export default function elementAtOrDefault<T>(index: number): IterableTransform<T, T | undefined>;
/**
 * Produces a function that returns the element at a specified index in a sequence or the default value if out of bounds.
 * @param {number} index
 * @param {TDefault} defaultValue
 * @return {IterableTransform<T, T | TDefault>}
 */
export default function elementAtOrDefault<T, TDefault>(index: number, defaultValue: T): IterableTransform<T, T | TDefault>;
