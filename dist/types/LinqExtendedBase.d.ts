import type { PredicateWithIndex } from '@tsdotnet/common-interfaces';
import LinqBase from "./LinqBase";
export default abstract class LinqExtendedBase<T, TLinq extends LinqExtendedBase<T, TLinq>> extends LinqBase<T, TLinq> {
    constructor(source: Iterable<T>, create: (source: Iterable<T>) => TLinq);
    toArray(): T[];
    count(predicate?: PredicateWithIndex<T>): number;
    any(predicate?: PredicateWithIndex<T>): boolean;
    all(predicate: PredicateWithIndex<T>): boolean;
    single(predicate?: PredicateWithIndex<T>): T;
    singleOrDefault<TDefault>(defaultValue: TDefault, predicate?: PredicateWithIndex<T>): T | TDefault;
    singleOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
    singleOrNull(predicate?: PredicateWithIndex<T>): T | null;
    first(predicate?: PredicateWithIndex<T>): T;
    firstOrDefault<TDefault>(defaultValue: TDefault, predicate?: PredicateWithIndex<T>): T | TDefault;
    firstOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
    firstOrNull(predicate?: PredicateWithIndex<T>): T | null;
    last(predicate?: PredicateWithIndex<T>): T;
    lastOrDefault<TDefault>(defaultValue: TDefault, predicate?: PredicateWithIndex<T>): T | TDefault;
    lastOrUndefined(predicate?: PredicateWithIndex<T>): T | undefined;
    lastOrNull(predicate?: PredicateWithIndex<T>): T | null;
}
