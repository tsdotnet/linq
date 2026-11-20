import type { Primitive } from '@tsdotnet/common-interfaces';
export default function descending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
