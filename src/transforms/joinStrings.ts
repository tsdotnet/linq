/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import ArgumentNullException from '@tsdotnet/exceptions/dist/ArgumentNullException';
import {IterableTransform} from '../IterableTransform';

/**
 * Joins a set of strings using the provided separator.
 * @param {string} separator
 * @return {IterableTransform<string, string>}
 */
export function joinStrings (separator: string = ''): IterableTransform<string, string>
{
	if(separator==null) separator = '';
	return function(sequence: Iterable<string>): string {
		if(!sequence) throw new ArgumentNullException('sequence');
		const i = sequence[Symbol.iterator]();
		let n = i.next();
		if(n.done) return '';
		let result = '' + n.value;
		while(!(n = i.next()).done)
		{
			result += separator + n.value;
		}
		return result;
	};
}
