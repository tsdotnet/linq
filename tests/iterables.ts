/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import {expect} from 'chai';
import take from '../src/filters/take';
import concat from '../src/iterables/concat';
import empty from '../src/iterables/empty';
import iterateIndexes from '../src/iterables/iterateIndexes';
import range from '../src/iterables/range';
import repeat from '../src/iterables/repeat';
import repeatSequence from '../src/iterables/repeatSequence';
import unfold from '../src/iterables/unfold';
import union from '../src/iterables/union';
import zip from '../src/iterables/zip';
import {joinStrings} from '../src/resolutions/joinStrings';
import {testRepeatableResolution} from './testRepeatableResolution';

describe('iterables/', () => {

	describe('concat(...sequences)', () => {
		it('should merge results', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution('abcdef',
				concat(['ab'], ['cd'], ['ef']),
				joinStrings());
		});
	});

	describe('empty', () => {
		it('should have no results', () => {
			let count = 0;
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for(const _ of empty())
			{
				count++;
			}
			expect(count).equal(0);
		});
	});

	describe('iterateIndexes(arrayLike)', () => {
		it('should iterate by index', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution('abcdef',
				iterateIndexes(['a', 'b', 'c', 'd', 'e', 'f']),
				joinStrings());
		});
	});

	describe('range(start, maxInclusive, step)', () => {
		const max = 10;
		it(`should produce ${10} consecutive numbers`, () => {
			expect(attempt()).equal(max);
			expect(attempt(), 'Second attempt should match.').equal(max);

			function attempt (): number
			{
				let count = 0;
				for(const i of range(1, max))
				{
					expect(i).equal(++count);
				}
				return count;
			}
		});
	});

	describe('repeat(item, max)', () => {
		const max = 10;
		it(`should repeat ${max} times`, () => {
			const value = 'x';

			expect(attempt()).equal(max);
			expect(attempt(), 'Second attempt should match.').equal(max);

			function attempt (): number
			{
				let count = 0;
				for(const e of repeat(value, max))
				{
					count++;
					expect(e).equal(value);
				}
				return count;
			}
		});
	});

	describe('repeatSequence(sequence, count)', () => {

		const repeatCount = 3;
		const sequence = Object.freeze(['x', 'y', 'z']);
		it('should yield repeatable results', () => {
			testRepeatableResolution(
				sequence.concat(sequence).concat(sequence),
				repeatSequence(sequence, repeatCount));
		});

	});

	describe('unfold(seed, valueFactory, skipSeed)', () => {
		it('should compute the seeded sequence', () => {
			testRepeatableResolution(
				[1, 3, 8, 19],
				take(4)(unfold(1, (e, i) => 2*e + i)));
		});
		it('should compute the seed skipped sequence', () => {
			testRepeatableResolution(
				[2, 5, 12, 27],
				take(4)(unfold(1, (e, i) => 2*e + i, true)));
		});
	});

	describe('union(...sequences)', () => {
		it('should a distinct set', () => {
			testRepeatableResolution(
				['x', 'y', 'z'],
				union(['x', 'y'], ['y', 'z'], ['x', 'z']));
		});
	});

	describe('zip(sequence1, sequence2)', () => {
		it('should a distinct set', () => {
			testRepeatableResolution(
				['ax', 'by', 'cz'],
				zip(
					['a', 'b', 'c'],
					['x', 'y', 'z'],
					(a, b) => a.value + b.value));
		});
	});

});
