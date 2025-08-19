import { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import { IterableTransform } from '../IterableTransform';
export default function any<T>(predicate?: PredicateWithIndex<T>): IterableTransform<T, boolean>;
