import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform';
export default function takeUntil<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
