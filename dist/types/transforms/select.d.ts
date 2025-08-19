import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
export default function select<T, TSelect>(selector: SelectorWithIndex<T, TSelect>): IterableValueTransform<T, TSelect>;
