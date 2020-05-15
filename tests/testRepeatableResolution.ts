/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import {IterableTransform} from '../src/IterableTransform';
import linq from '../src/linq';

export function testRepeatableResolution<T, TResolution> (
	expected: TResolution,
	source: Iterable<T>,
	resolver: IterableTransform<T, TResolution>): void
{
	const s = linq(source);
	expect(s.resolve(resolver))
		.equal(expected);
	expect(s.resolve(resolver), 'Second attempt must match.')
		.equal(expected);
}
