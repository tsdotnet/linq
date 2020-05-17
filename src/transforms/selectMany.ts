/**
 * @packageDocumentation
 * @module transforms
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {SelectorWithIndex} from '@tsdotnet/common-interfaces';
import {IterableValueTransform} from '../IterableTransform';

/**
 *  An iterable filter that merges the output of selected iterables.
 * @param {SelectorWithIndex} selector
 * @return {(sequence: Iterable<T>) => Iterable<TSelect>}
 */
export default function selectMany<T, TSelect> (
	selector: SelectorWithIndex<T, Iterable<TSelect>>): IterableValueTransform<T, TSelect> {
	return function(sequence: Iterable<T>): Iterable<TSelect> {
		return {
			* [Symbol.iterator] (): Iterator<TSelect>
			{
				let i = 0;
				for(const outer of sequence)
				{
					for(const inner of selector(outer, i++)) yield inner;
				}
			}
		};
	};
}
