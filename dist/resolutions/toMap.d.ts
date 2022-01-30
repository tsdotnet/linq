import { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
export declare const enum MappingMode {
    Throw = -1,
    Keep = 0,
    Overwrite = 1
}
/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, T>>}
 */
export default function toMap<T, TKey>(keySelector: SelectorWithIndex<T, TKey>, mappingBehavior?: MappingMode): IterableTransform<T, Map<TKey, T>>;
/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param {SelectorWithIndex<T, TValue>} valueSelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, TValue>>}
 */
export default function toMap<T, TKey, TValue>(keySelector: SelectorWithIndex<T, TKey>, valueSelector: SelectorWithIndex<T, TValue>, mappingBehavior?: MappingMode): IterableTransform<T, Map<TKey, TValue>>;
