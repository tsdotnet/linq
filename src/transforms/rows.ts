/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';

export type Cell = IteratorYieldResult<any> | null;
export type Row = Cell[];

/**
 * Returns the rows from a given set of iterables representing columns.
 * @param {Iterable<Iterable<any>>} columns
 * @return {Iterable<Row>}
 */
export default function rows (columns: Iterable<Iterable<any>>): Iterable<Row> {
	if(!columns) throw new ArgumentNullException('columns');
	return {
		* [Symbol.iterator] (): Iterator<Row>
		{
			const iterators: (Iterator<any> | null)[] = [];

			// first pass.
			let row: Row = [], count = 0;
			for(const c of columns)
			{
				const i = c[Symbol.iterator]();
				const n = i.next();
				if(n.done)
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
			if(!count) return; // no rows.
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
