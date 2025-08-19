import type { Primitive } from '@tsdotnet/common-interfaces';
export default function max<T extends Primitive>(sequence: Iterable<T>): T;
