import { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Returns the entry in the sequence that has the highest/greatest value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export declare function max<T extends Primitive>(sequence: Iterable<T>): T;
