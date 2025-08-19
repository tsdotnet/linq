import type { Comparison } from '@tsdotnet/compare';
import { Order } from '@tsdotnet/compare';
import { IterableFilter } from '../IterableTransform';
export default function orderUsing<T>(comparison: Comparison<T>, order?: Order): IterableFilter<T>;
