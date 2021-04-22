declare type NotNull<T> = T extends null ? never : T;
/**
 * Filters out null values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotNull<T>>}
 */
export default function notNull<T>(sequence: Iterable<T>): Iterable<NotNull<T>>;
export {};
