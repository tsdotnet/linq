/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableValueTransform} from '../IterableTransform';
import Selector from '../Selector';

/**
 * A iterable filter that groups the elements of a sequence according to a specified key selector function and creates a result value from each group and its key.
 */
export default function groupBy<TKey, TElement> (
	keySelector: Selector<TElement, TKey>): IterableValueTransform<TElement, Grouping<TKey, TElement>> {
	return function* (sequence: Iterable<TElement>): Iterable<Grouping<TKey, TElement>> {
		const
			keys: TKey[] = [],
			map          = new Map<TKey, TElement[]>();

		let i = 0;
		for(const e of sequence)
		{
			const key = keySelector(e, i++);
			getOrAdd(keys, map, key).push(e);
		}

		for(const k of keys)
		{
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			const r = map.get(k)!;
			map.delete(k);
			yield new GroupingResult(k, r);
		}
		keys.length = 0;
	};
}

export interface Grouping<TKey, TElement>
	extends Iterable<TElement>
{
	readonly key: TKey;
	readonly elements: TElement[];
}

class GroupingResult<TKey, TElement>
	implements Grouping<TKey, TElement>
{
	constructor (
		public readonly key: TKey,
		public readonly elements: TElement[])
	{
		Object.freeze(this);
	}

	[Symbol.iterator] (): Iterator<TElement>
	{
		return this.elements[Symbol.iterator]();
	}
}

function getOrAdd<TKey, TElement> (keys: TKey[], map: Map<TKey, TElement[]>, key: TKey): TElement[]
{
	let elements = map.get(key);
	if(!elements)
	{
		keys.push(key);
		map.set(key, elements = []);
	}
	return elements;
}
