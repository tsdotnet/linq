/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {SelectorWithIndex} from '@tsdotnet/common-interfaces';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import identity from '../identity';
import {IterableTransform} from '../IterableTransform';

export const enum MappingMode
{
	Throw     = -1,
	Keep      = 0,
	Overwrite = 1
}

/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, T>>}
 */
export default function toMap<T, TKey> (
	keySelector: SelectorWithIndex<T, TKey>,
	mappingBehavior?: MappingMode
): IterableTransform<T, Map<TKey, T>>;

/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param {SelectorWithIndex<T, TValue>} valueSelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, TValue>>}
 */
export default function toMap<T, TKey, TValue> (
	keySelector: SelectorWithIndex<T, TKey>,
	valueSelector: SelectorWithIndex<T, TValue>,
	mappingBehavior?: MappingMode
): IterableTransform<T, Map<TKey, TValue>>;

/**
 * Returns a map of all elements .
 * @param {SelectorWithIndex<T, TKey>} keySelector
 * @param valueSelector
 * @param {MappingMode} mappingBehavior
 * @return {IterableTransform<T, Map<TKey, TValue>>}
 */
export default function toMap<T, TKey, TValue> (
	keySelector: SelectorWithIndex<T, TKey>,
	valueSelector: any           = identity,
	mappingBehavior: MappingMode = MappingMode.Throw
): IterableTransform<T, Map<TKey, TValue>> {
	if(!keySelector) throw new ArgumentNullException('keySelector');
	if(typeof valueSelector=='number')
	{
		mappingBehavior = valueSelector;
		valueSelector = undefined;
	}
	if(!valueSelector) valueSelector = identity; // in case the user uses null as a default.
	return function(sequence: Iterable<T>): Map<TKey, TValue> {
		const result = new Map<TKey, TValue>();
		let i = 0;
		for(const e of sequence)
		{
			const key = keySelector(e, i++);
			if(result.has(key)) switch(mappingBehavior)
			{
				case MappingMode.Keep:
					continue;
				case MappingMode.Throw:
					throw new Error('MappingMode.Throw: more than one of the same key encountered.');
			}
			result.set(key, valueSelector(e, i - 1));
		}
		return result;
	};
}
