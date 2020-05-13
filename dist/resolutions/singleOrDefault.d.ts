/**
 * Returns a single, specific element of a sequence, or a default value if that element is not found.
 */
export default function singleOrDefault<T>(sequence: Iterable<T>, defaultValue?: T): T | undefined;
