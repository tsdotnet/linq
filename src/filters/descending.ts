/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import type {Primitive} from '@tsdotnet/common-interfaces';
import {compare} from '@tsdotnet/compare';
import toArray from '../resolutions/toArray';

/**
 * Default descending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function descending<T extends Primitive> (sequence: Iterable<T>): Iterable<T> {
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			for(const e of toArray(sequence).sort(compare.primitives.inverted)) yield e;
		}
	};
}
