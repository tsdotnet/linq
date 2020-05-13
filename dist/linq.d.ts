import { IterableFilter, IterableTransform } from './IterableTransform';
export declare class Linq<T> implements Iterable<T> {
    private readonly _source;
    constructor(_source: Iterable<T>);
    [Symbol.iterator](): Iterator<T>;
    filter(): this;
    filter(...filters: IterableFilter<T>[]): Linq<T>;
    toArray(): T[];
    resolve<TResolution>(resolution: IterableTransform<T, TResolution>): TResolution;
}
