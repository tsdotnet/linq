/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {IterableTransform} from '../IterableTransform';
import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import areEqual from '@tsdotnet/compare/dist/areEqual';

export default function contains<T> (value: T): IterableTransform<T, boolean> {
	return function(sequence: Iterable<T>): boolean {
		if(!sequence) throw new ArgumentNullException('sequence');
		for(const e of sequence)
		{
			if(areEqual(e, value)) return true;
		}
		return false;
	};
}
