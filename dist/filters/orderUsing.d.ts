/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Comparison } from '@tsdotnet/compare/dist/Comparable';
import Order from '@tsdotnet/compare/dist/Order';
import { IterableFilter } from '../IterableTransform';
/**
 * Orders elements by use of a comparison function.
 * @param {Comparison} comparison The function to decide if elements are greater, lesser or equal.
 * @param {Order} order Default is ascending.
 * @return {IterableFilter}
 */
export default function orderUsing<T>(comparison: Comparison<T>, order?: Order): IterableFilter<T>;
