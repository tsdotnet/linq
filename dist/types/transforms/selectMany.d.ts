import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
export default function selectMany<TSelect, T extends Iterable<TSelect> = Iterable<TSelect>>(): IterableValueTransform<T, TSelect>;
export default function selectMany<T, TSelect>(selector: SelectorWithIndex<T, Iterable<TSelect>>): IterableValueTransform<T, TSelect>;
