/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {PredicateWithIndex} from '@tsdotnet/common-interfaces';
import {IterableTransform} from '../IterableTransform';
import isEmpty from './isEmpty';

/**
 * An iterable transform that resolves true if the predicate ever returns true. Otherwise false.
 * If no predicate is provided, will resolve true if the sequence is not empty.
 * @param {PredicateWithIndex<T>} predicate
 * @return {IterableTransform<T, boolean>}
 */
export default function any<T> (predicate?: PredicateWithIndex<T>): IterableTransform<T, boolean> {
	return function(sequence: Iterable<T>): boolean {
		if(!sequence) return false;
		if(!predicate)
		{
			// noinspection PointlessBooleanExpressionJS
			return !isEmpty(sequence);
		}
		if(sequence instanceof Array) return sequence.some(predicate);
		let i = 0;
		for(const e of sequence)
		{
			if(predicate(e, i++)) return true;
		}
		return false;
	};
}
