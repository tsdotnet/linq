import type { Primitive } from '@tsdotnet/common-interfaces';
export default function min<T extends Primitive>(sequence: Iterable<T>): T;
