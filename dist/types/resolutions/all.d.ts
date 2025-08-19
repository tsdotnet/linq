import type { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
export default function all<T>(predicate: PredicateWithIndex<T>): IterableTransform<T, boolean>;
