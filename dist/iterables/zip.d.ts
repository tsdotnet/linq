/**
 * Concatenates the provided sequences.
 */
export default function zip<T1, T2, TResult>(sequence1: Iterable<T1>, sequence2: Iterable<T2>, selector: (r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult): Iterable<TResult>;
