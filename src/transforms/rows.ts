/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

export type Cell<T> = IteratorYieldResult<T> | null;
export type Row<T> = Cell<T>[];

/**
 * Returns the rows from a given set of iterables representing columns.
 * @param {Iterable<Iterable<T>>} columns
 * @return {Iterable<Row<T>>}
 */
export default function rows<T>(columns: Iterable<Iterable<T>>): Iterable<Row<T>> {
	if(columns==null) throw new ArgumentNullException('columns');
	return {
		* [Symbol.iterator] (): Iterator<Row<T>>
		{
			const iterators: (Iterator<T> | null)[] = [];

			// first pass.
			let row: Row<T> = [], count = 0;
			for(const c of columns)
			{
				const i = c[Symbol.iterator]();
				const n = i.next();
				if(n.done==true)
				{
					row.push(null);
					iterators.push(null);
				}
				else
				{
					count++;
					row.push(n);
					iterators.push(i);
				}
			}
			if(count==0) return; // no rows.
			yield row;

			const len = iterators.length;
			do
			{
				row = [];
				count = 0;
				for(let i = 0; i<len; i++)
				{
					const n = iterators[i]?.next();
					if(!n)
					{
						row.push(null);
					}
					else if(n.done)
					{
						row.push(null);
						iterators[i] = null;
					}
					else
					{
						row.push(n);
						count++;
					}
				}
				if(count) yield row;
			}
			while(count);
		}
	};
}
