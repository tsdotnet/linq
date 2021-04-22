/**
 * Produces a sequence that is combination of the two sequences..
 * @param {Iterable<T1>} sequence1
 * @param {Iterable<T2>} sequence2
 * @param {(r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult} selector
 * @return {Iterable<TResult>}
 */
export default function zip<T1, T2, TResult>(sequence1: Iterable<T1>, sequence2: Iterable<T2>, selector: (r1: IteratorResult<T1>, r2: IteratorResult<T2>, i: number) => TResult): Iterable<TResult>;
