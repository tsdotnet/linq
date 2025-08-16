import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
/**
 *  An iterable filter that merges the output of contained iterables.
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function selectMany<TSelect, T extends Iterable<TSelect> = Iterable<TSelect>>(): IterableValueTransform<T, TSelect>;
/**
 *  An iterable filter that merges the output of selected iterables.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function selectMany<T, TSelect>(selector: SelectorWithIndex<T, Iterable<TSelect>>): IterableValueTransform<T, TSelect>;
