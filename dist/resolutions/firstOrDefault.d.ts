/**
 * Returns the first element of a sequence, or a the default value if no element is found.
 */
export default function firstOrDefault<T>(sequence: Iterable<T>, defaultValue?: T): T | undefined;
