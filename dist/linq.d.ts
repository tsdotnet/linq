import { IterableFilter, IterableTransform, IterableValueTransform } from './IterableTransform';
export declare class Linq<T> implements Iterable<T> {
    private readonly _source;
    constructor(_source: Iterable<T>);
    [Symbol.iterator](): Iterator<T>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter} filters The filters to use.
     * @return {Linq}
     */
    filter(...filters: IterableFilter<T>[]): Linq<T>;
    /**
     * Returns a filtered sequence.
     * @param {IterableFilter} filters The filters to use.
     * @return {Linq}
     */
    filters(filters: Iterable<IterableFilter<T>>): Linq<T>;
    /**
     * Returns a transformed sequence.
     * @param {IterableValueTransform} transform The transform to use.
     * @return {Linq<TResult>}
     */
    transform<TResult>(transform: IterableValueTransform<T, TResult>): Linq<TResult>;
    /**
     * Applies a resolution to this sequence.
     * @param {IterableTransform} resolution
     * @return {TResolution}
     */
    resolve<TResolution>(resolution: IterableTransform<T, TResolution>): TResolution;
}
/**
 * Converts any iterable into a LINQ style iterable.
 * Import filters and transforms to create a query.
 * Use a resolution to get a result.
 * @param {Iterable<T>} source
 * @return {Linq<T>}
 */
export default function linq<T>(source: Iterable<T>): Linq<T>;
