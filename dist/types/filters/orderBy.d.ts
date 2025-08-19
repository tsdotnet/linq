import type { Primitive, Selector } from '@tsdotnet/common-interfaces';
import { OrderOrValue } from '@tsdotnet/compare';
import { IterableFilter } from '../IterableTransform';
export default function orderBy<T, TKey extends Primitive>(keySelector: Selector<T, TKey>, order?: OrderOrValue): IterableFilter<T>;
