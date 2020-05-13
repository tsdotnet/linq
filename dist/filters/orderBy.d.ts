import { Primitive, Selector } from '@tsdotnet/common-interfaces';
import Order from '@tsdotnet/compare/dist/Order';
import { IterableFilter } from '../IterableTransform';
export default function orderBy<T, TKey extends Primitive>(keySelector: Selector<T, TKey>, order?: Order): IterableFilter<T>;
