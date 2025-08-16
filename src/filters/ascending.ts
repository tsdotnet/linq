/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import type {Primitive} from '@tsdotnet/common-interfaces';
import {compare} from '@tsdotnet/compare';
import toArray from '../resolutions/toArray';

/**
 * Default ascending sort delegate for primitive only iterables.
 * @param {Iterable<T>} sequence
 * @return {Iterable<T>}
 */
export default function ascending<T extends Primitive> (sequence: Iterable<T>): Iterable<T> {
	return {
		* [Symbol.iterator] (): Iterator<T>
		{
			for(const e of toArray(sequence).sort(compare.primitives)) yield e;
		}
	};
}
