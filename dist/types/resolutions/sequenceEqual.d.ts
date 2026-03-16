import { type EqualityComparison } from '@tsdotnet/compare';
import { IterableTransform } from '../IterableTransform.js';
export default function sequenceEqual<T>(other: Iterable<T>, equalityComparer?: EqualityComparison<T>): IterableTransform<T, boolean>;
