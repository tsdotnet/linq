export type Cell<T> = IteratorYieldResult<T> | null;
export type Row<T> = Cell<T>[];
export default function rows<T>(columns: Iterable<Iterable<T>>): Iterable<Row<T>>;
