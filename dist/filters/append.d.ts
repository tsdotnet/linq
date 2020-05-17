/**
 * @packageDocumentation
 * @module filters
 */
import { IterableFilter } from '../IterableTransform';
export default function append<T>(...elements: T[]): IterableFilter<T>;
