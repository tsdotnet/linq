import { IterableFilter, IterableTransform, IterableValueTransform } from './IterableTransform';
export declare class Linq<T> implements Iterable<T> {
    private readonly _source;
    constructor(_source: Iterable<T>);
    [Symbol.iterator](): Iterator<T>;
    /**
     * Returns a filtered sequence.
     * Same effect as .transform(filter).
     * @param {IterableValueTransform<T, TResult>} filter
     * @return {Linq<TResult>}
     */
    filter<TResult>(filter: IterableValueTransform<T, TResult>): Linq<TResult>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filter(...filters: IterableFilter<T>[]): Linq<T>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter<T>} filters The filters to use.
     * @return {Linq<T>}
     */
    filters(filters: Iterable<IterableFilter<T>>): Linq<T>;
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform<T, TResult>} transform The transform to use.
     * @return {Linq<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult>;
    /**
     * Applies a resolver to this sequence.
     * @param {IterableTransform<T, TResolution>} resolver
     * @return {TResolution}
     */
    resolve<TResolution>(resolver: IterableTransform<T, TResolution>): TResolution;
}
/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq<T>(source: Iterable<T>): Linq<T>;
