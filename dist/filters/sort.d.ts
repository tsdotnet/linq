/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Primitive } from '@tsdotnet/common-interfaces';
/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export declare function ascending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export declare function descending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
