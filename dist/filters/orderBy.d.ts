/**
 * @packageDocumentation
 * @module filters
 */
import { Primitive, Selector } from '@tsdotnet/common-interfaces';
import Order from '@tsdotnet/compare/dist/Order';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that orders elements by a primitive value provided by the key selector.
 * @param {Selector<T, TKey>} keySelector
 * @param {Order} order
 * @return {IterableFilter<T>}
 */
export default function orderBy<T, TKey extends Primitive>(keySelector: Selector<T, TKey>, order?: Order): IterableFilter<T>;
