/**
 * @packageDocumentation
 * @module resolutions
 */
/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {IterableTransform} from '../IterableTransform';
import indexOf from './indexOf';

/**
 * An iterable transform that resolves true if the provided sequence contains the entry. Otherwise false.
 * @param {T} entry
 * @return {IterableTransform<T, boolean>}
 */
export default function contains<T> (entry: T): IterableTransform<T, boolean> {
	return function(sequence: Iterable<T>): boolean {
		return indexOf(entry)(sequence)!== -1;
	};
}
