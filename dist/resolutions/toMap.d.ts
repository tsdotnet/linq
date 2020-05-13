/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
export declare const enum MappingMode {
    Throw = -1,
    Keep = 0,
    Overwrite = 1
}
declare function toMap<T, TKey>(keySelector: SelectorWithIndex<T, TKey>, mappingBehavior?: MappingMode): IterableTransform<T, Map<TKey, T>>;
declare function toMap<T, TKey, TValue>(keySelector: SelectorWithIndex<T, TKey>, valueSelector: SelectorWithIndex<T, TValue>, mappingBehavior?: MappingMode): IterableTransform<T, Map<TKey, TValue>>;
export default toMap;
