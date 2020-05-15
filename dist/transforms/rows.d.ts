export declare type Cell = IteratorYieldResult<any> | null;
export declare type Row = Cell[];
/**
 * Returns the rows from a given set of iterables representing columns.
 * @param {Iterable<Iterable<any>>} columns
 * @return {Iterable<Row>}
 */
export default function rows(columns: Iterable<Iterable<any>>): Iterable<Row>;
