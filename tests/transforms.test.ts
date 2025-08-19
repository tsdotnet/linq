/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import { describe, it, expect } from 'vitest';
import linq from '../src';
import repeatSequence from '../src/iterables/repeatSequence';
import linqExtended from '../src/linqExtended';
import count from '../src/resolutions/count';
import {joinStrings} from '../src/resolutions/joinStrings';
import notNull from '../src/transforms/notNull';
import notNullOrUndefined from '../src/transforms/notNullOrUndefined';
import notUndefined from '../src/transforms/notUndefined';
import rows from '../src/transforms/rows';
import selectMany from '../src/transforms/selectMany';
import weave from '../src/transforms/weave';
import {testRepeatableResolution} from './testRepeatableResolution';

/* eslint-disable @typescript-eslint/camelcase */

describe('transforms/', () => {

	describe('nullable/', () => {
		describe('notNull', () => {
			const repeatCount = 3;

			it('should filter out nulls', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notNull(repeatSequence(['x', 'y', 'z', null], repeatCount)),
					joinStrings());

			});

			it('should filter out nulls but retain undefined', () => {
				const source = ['x', 'y', undefined, 'z', null];
				const expectedTotal = (source.length - 1)*repeatCount;
				testRepeatableResolution(
					expectedTotal,
					notNull(repeatSequence(source, repeatCount)),
					count);
				testRepeatableResolution(
					expectedTotal,
					linq(repeatSequence(source, repeatCount))
						.filter(notNull),
					count);
				testRepeatableResolution(
					repeatCount,
					linqExtended(repeatSequence(source, repeatCount))
						.filter(notNull)
						.where(e => e===undefined),
					count);
			});

		});

		describe('notUndefined', () => {
			const repeatCount = 3;

			it('should filter out undefined', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notUndefined(repeatSequence(['x', 'y', 'z', undefined], repeatCount)),
					joinStrings());

			});

			it('should filter out nulls but retain nulls', () => {
				const source = ['x', 'y', undefined, 'z', null];
				const expectedTotal = (source.length - 1)*repeatCount;
				testRepeatableResolution(
					expectedTotal,
					notUndefined(repeatSequence(source, repeatCount)),
					count);
				testRepeatableResolution(
					expectedTotal,
					linq(repeatSequence(source, repeatCount))
						.filter(notUndefined),
					count);
				testRepeatableResolution(
					repeatCount,
					linqExtended(repeatSequence(source, repeatCount))
						.filter(notUndefined)
						.where(e => e===null),
					count);
			});

		});

		describe('notNullOrUndefined', () => {
			const repeatCount = 3;

			it('should filter out nulls and undefined', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notNullOrUndefined(repeatSequence([
						'x',
						'y',
						undefined,
						'z',
						null
					], repeatCount)),
					joinStrings());

			});
		});
	});


	describe('selectMany()', () => {
		it('should produce the expected sequence', () => {
			testRepeatableResolution(
				'abcdefghi',
				linq([
					['a', 'b', 'c'],
					['d', 'e'],
					['f', 'g', 'h', 'i']
				]).transform(selectMany<string>()),
				joinStrings()
			);
		});
	});

	describe('selectMany(childSelector)', () => {
		it('should produce the expected sequence', () => {
			testRepeatableResolution(
				'abcdefghi',
				linq([
					{a: 1, b: ['a', 'b', 'c']},
					{a: 2, b: ['d', 'e']},
					{a: 3, b: ['f', 'g', 'h', 'i']}
				]).transform(selectMany(o => o.b)),
				joinStrings()
			);
		});
	});


	// groupBy handled by linqExtended.

	describe('rows(columns)', () => {

		type CellValue = number | undefined;

		it('should produce the expected sequence', () => {
			const w = rows([
				[1, 4, 7, 10, 13, 15, 17],
				[2, 5, 8, 11],
				[],
				[3, 6, 9, 12, 14, 16]
			]);

			expect(attempt()).equal(7);
			expect(attempt(), 'Second attempt should match.').equal(7);

			function attempt (): number
			{
				let i = 0;
				for(const row of w)
				{
					let expected: CellValue[] = [];
					switch(i++)
					{
						case 0:
							expected = [1, 2, undefined, 3];
							break;
						case 1:
							expected = [4, 5, undefined, 6];
							break;
						case 2:
							expected = [7, 8, undefined, 9];
							break;
						case 3:
							expected = [10, 11, undefined, 12];
							break;
						case 4:
							expected = [13, undefined, undefined, 14];
							break;
						case 5:
							expected = [15, undefined, undefined, 16];
							break;
						case 6:
							expected = [17, undefined, undefined, undefined];
							break;

					}
					expect(row.map(c => c?.value)).members(expected);
				}
				return i;
			}

		});
	});


	describe('weave(sequences)', () => {
		it('should produce the expected sequence', () => {
			const w = weave([
				[1, 4, 7, 10, 13, 15, 17],
				[2, 5, 8, 11],
				[3, 6, 9, 12, 14, 16]
			]);

			expect(attempt()).equal(17);
			expect(attempt(), 'Second attempt should match.').equal(17);

			function attempt (): number
			{
				let i = 0;
				for(const e of w)
				{
					expect(e).equal(++i);
				}
				return i;
			}
		});
	});
});
