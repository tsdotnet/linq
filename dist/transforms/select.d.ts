/**
 * @packageDocumentation
 * @module transforms
 */
import { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
/**
 * An iterable filter that transforms (maps / projects) the output from the contained elements.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function select<T, TSelect>(selector: SelectorWithIndex<T, TSelect>): IterableValueTransform<T, TSelect>;
