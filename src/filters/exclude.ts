/**
 * @packageDocumentation
 * @module filters
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableFilter} from '../IterableTransform';
import same from './same';

/**
 * An iterable filter that returns all elements except for any in the exclusion sequence.
 * @param {Iterable<T>} exclusions
 * @return {IterableFilter<T>}
 */
export default function exclude<T> (exclusions: Iterable<T>): IterableFilter<T> {
	if(!exclusions) return same;
	return function(sequence: Iterable<T>): Iterable<T> {
		return {
			* [Symbol.iterator] (): Iterator<T>
			{
				const x = new Set<T>();
				const xi = exclusions[Symbol.iterator]();

				let n = xi.next();
				if(n.done)
				{
					// No exclusions, just return the sequence in entirety.
					for(const s of sequence) yield s;
					return;
				}
				x.add(n.value);

				let done = false;
				for(const s of sequence)
				{
					if(x.has(s)) continue;
					while(!done)
					{
						n = xi.next();
						if(n.done)
						{
							done = true;
							break;
						}
						else
						{
							x.add(n.value);
							if(!x.has(s)) break; // use set.has to reuse equality.
						}
					}
					yield s;
				}
				x.clear();
			}
		};
	};
}
