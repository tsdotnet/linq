/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { describe, it, expect } from 'vitest';
import {IterableTransform} from '../src/IterableTransform';
import linq from '../src/linq';
import asArray from '../src/resolutions/asArray';
import toArray from '../src/resolutions/toArray';

export function testRepeatableResolution<T> (
	expected: Iterable<T>,
	source: Iterable<T>): void

export function testRepeatableResolution<T, TResolution> (
	expected: TResolution,
	source: Iterable<T>,
	resolver: IterableTransform<T, TResolution>): void

export function testRepeatableResolution<T, TResolution> (
	expected: any,
	source: Iterable<T>,
	resolver?: any): void
{
	const s = linq(source);
	if(!resolver)
	{
		expected = asArray(expected);
		resolver = toArray;
	}
	if(expected instanceof Array)
	{
		expected = Object.freeze(expected); // just to be sure.
		const first = s.resolve(resolver) as unknown as any[];
		expect(first).instanceOf(Array);
		expect(first).length(expected.length);
		expect(first).to.have.ordered.members(expected);
		const second = s.resolve(resolver) as unknown as any[];
		expect(second).instanceOf(Array);
		expect(second).length(expected.length);
		expect(second, 'Second attempt must match.').to.have.ordered.members(expected);
	}
	else
	{
		expect(s.resolve(resolver))
			.equal(expected);
		expect(s.resolve(resolver), 'Second attempt must match.')
			.equal(expected);
	}
}

export function testRepeatableDelegate<T> (expected: T, delegate: () => T): void
{
	expect(delegate()).equal(expected);
	expect(delegate(), 'Second attempt must match.').equal(expected);
}
