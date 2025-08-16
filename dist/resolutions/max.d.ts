import type { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Returns the entry in the sequence that has the highest/greatest value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function max<T extends Primitive>(sequence: Iterable<T>): T;
