/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {SelectorWithIndex} from '@tsdotnet/common-interfaces';
import {IterableValueTransform} from '../IterableTransform';

/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * An iterable filter that groups the elements of a sequence according to a specified key selector function and creates an iterable from each group and its key.
 */
export default function groupBy<TKey, TElement> (
	keySelector: SelectorWithIndex<TElement, TKey>): IterableValueTransform<TElement, Grouping<TKey, TElement>> {
	return function* (sequence: Iterable<TElement>): Iterable<Grouping<TKey, TElement>> {
		const
			map      = new Map<TKey, TElement[]>(),
			iterator = sequence[Symbol.iterator]();

		let i = 0;

		function mapNext ()
		{
			const next = iterator.next();
			if(next.done) return null;
			const e = next.value;
			const key = keySelector(e, i++);
			let elements = map.get(key);
			const isFirstOf = !elements;
			if(!elements)
				map.set(key, elements = []);
			elements.push(e);
			return {key, elements, isFirstOf};
		}

		let next = mapNext();
		while(next)
		{
			const {key, elements} = next;
			yield new GroupingResult(key, {
				* [Symbol.iterator] (): Iterator<TElement>
				{
					let n = 0;
					while(n<elements.length || next)
					{
						if(n<elements.length) yield elements[n++];
						else if(next) next = mapNext();
					}
				}
			});

			// Keep mapping next until a new key is discovered.
			do
			{ next = mapNext(); }
			while(next && !next.isFirstOf);
		}

		// If we made it all the way here, then all the results have been distributed.
		map.clear();
	};
}

export interface Grouping<TKey, TElement>
	extends Iterable<TElement>
{
	readonly key: TKey;
}

class GroupingResult<TKey, TElement>
	implements Grouping<TKey, TElement>
{
	constructor (
		public readonly key: TKey,
		public readonly elements: Iterable<TElement>)
	{
		Object.freeze(this);
	}

	[Symbol.iterator] (): Iterator<TElement>
	{
		return this.elements[Symbol.iterator]();
	}
}
