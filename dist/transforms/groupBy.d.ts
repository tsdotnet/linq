import { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
/**
 * An iterable filter that groups the elements of a sequence according to a specified key selector function and creates an iterable from each group and its key.
 */
export default function groupBy<TKey, TElement>(keySelector: SelectorWithIndex<TElement, TKey>): IterableValueTransform<TElement, Grouping<TKey, TElement>>;
export interface Grouping<TKey, TElement> extends Iterable<TElement> {
    readonly key: TKey;
}
