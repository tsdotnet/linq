import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
import { IterableValueTransform } from '../IterableTransform';
export default function groupBy<TKey, TElement>(keySelector: SelectorWithIndex<TElement, TKey>): IterableValueTransform<TElement, GroupingResult<TKey, TElement>>;
export interface Grouping<TKey, TElement> extends Iterable<TElement> {
    readonly key: TKey;
}
export declare class GroupingResult<TKey, TElement> implements Grouping<TKey, TElement> {
    readonly key: TKey;
    readonly elements: Iterable<TElement>;
    constructor(key: TKey, elements: Iterable<TElement>);
    [Symbol.iterator](): Iterator<TElement>;
}
