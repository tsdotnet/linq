/**
 * @packageDocumentation
 * @module resolutions
 */
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that resolves true if the provided sequence contains the entry. Otherwise false.
 * @param {T} entry
 * @return {IterableTransform<T, boolean>}
 */
export default function contains<T>(entry: T): IterableTransform<T, boolean>;
