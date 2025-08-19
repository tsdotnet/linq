import LinqBase from './LinqBase';
import { IterableFilter, IterableValueTransform } from './IterableTransform';
import type { SelectorWithIndex } from '@tsdotnet/common-interfaces';
export declare class Linq<T> extends LinqBase<T, Linq<T>> {
    protected readonly source: Iterable<T>;
    constructor(source: Iterable<T>);
    [Symbol.iterator](): Iterator<T>;
    filter<TResult>(filter: IterableValueTransform<T, TResult>): Linq<TResult>;
    filter(filter: IterableFilter<T>): Linq<T>;
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult>;
    select<TResult>(selector: SelectorWithIndex<T, TResult>): Linq<TResult>;
    selectMany<TResult>(selector: SelectorWithIndex<T, Iterable<TResult>>): Linq<TResult>;
}
export default function linq<T>(source: Iterable<T>): Linq<T>;
