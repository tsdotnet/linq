/**
 * Returns an item from each iterable before calling next on each.
 */
export default function weave<T>(sequences: Iterable<Iterable<T>>): Iterable<T>;
