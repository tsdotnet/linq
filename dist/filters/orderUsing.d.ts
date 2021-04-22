import { Comparison } from '@tsdotnet/compare/dist/Comparable';
import Order from '@tsdotnet/compare/dist/Order';
import { IterableFilter } from '../IterableTransform';
/**
 * An iterable filter that orders elements by use of a comparison function.
 * @param {Comparison<T>} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter<T>}
 */
export default function orderUsing<T>(comparison: Comparison<T>, order?: Order): IterableFilter<T>;
