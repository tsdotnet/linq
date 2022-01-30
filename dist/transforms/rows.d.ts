export declare type Cell<T> = IteratorYieldResult<T> | null;
export declare type Row<T> = Cell<T>[];
/**
 * Returns the rows from a given set of iterables representing columns.
 * @param {Iterable<Iterable<T>>} columns
 * @return {Iterable<Row<T>>}
 */
export default function rows<T>(columns: Iterable<Iterable<T>>): Iterable<Row<T>>;
