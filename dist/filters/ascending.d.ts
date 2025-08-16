import type { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function ascending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
