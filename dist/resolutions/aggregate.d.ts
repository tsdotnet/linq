/**
 * @packageDocumentation
 * @module resolutions
 */
import { IterableTransform } from '../IterableTransform';
/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The first entry is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: (T | undefined), current: T, index: number) => T} reducer
 * @return {IterableTransform<T, T | undefined>}
 */
export default function aggregate<T>(reducer: (previous: T, current: T, index: number) => T): IterableTransform<T, T>;
/**
 * An iterable transform that applies an accumulator function over a sequence.
 * The specified seed value is used as the initial accumulator value, and the specified function is used to select the result value.
 * @param {(previous: U, current: T, index: number) => U} reducer
 * @param {U} initialValue
 * @return {IterableTransform<T, U>}
 */
export default function aggregate<T, U>(reducer: (previous: U, current: T, index: number) => U, initialValue: U): IterableTransform<T, U>;
