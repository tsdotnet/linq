import { IterableTransform } from '../IterableTransform';
/**
 * Produces a function that returns the element at a specified index in a sequence.
 * @param {number} index
 * @returns A function that when passed a sequence of elements selects the specific element.
 */
export default function elementAt<T>(index: number): IterableTransform<T, T>;
