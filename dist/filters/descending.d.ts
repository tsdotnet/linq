import { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function descending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
