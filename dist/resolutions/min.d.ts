/**
 * @packageDocumentation
 * @module resolutions
 */
import { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Returns the entry in the sequence that has the lowest/least value.
 * @param {Iterable<T>} sequence
 * @return {T}
 */
export default function min<T extends Primitive>(sequence: Iterable<T>): T;
