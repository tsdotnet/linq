export type NotUndefined<T> = T extends undefined ? never : T;
/**
 * Filters out undefined values.
 * @param {Iterable<T>} sequence
 * @return {Iterable<NotUndefined<T>>}
 */
export default function notUndefined<T>(sequence: Iterable<T>): Iterable<NotUndefined<T>>;
