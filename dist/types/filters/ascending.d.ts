import type { Primitive } from '@tsdotnet/common-interfaces';
export default function ascending<T extends Primitive>(sequence: Iterable<T>): Iterable<T>;
