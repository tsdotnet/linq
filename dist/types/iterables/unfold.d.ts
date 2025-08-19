import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
export default function unfold<T>(seed: T, valueFactory: SelectorWithIndex<T, T>, skipSeed?: boolean): Iterable<T>;
