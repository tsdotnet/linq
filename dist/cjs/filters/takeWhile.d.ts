import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableFilter } from '../IterableTransform.js';
export default function takeWhile<T>(predicate: PredicateWithIndex<T>): IterableFilter<T>;
