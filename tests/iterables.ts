/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import empty from '../src/iterables/empty';
import range from '../src/iterables/range';
import repeat from '../src/iterables/repeat';
import repeatSequence from '../src/iterables/repeatSequence';
import count from '../src/resolutions/count';
import toArray from '../src/resolutions/toArray';

describe('iterables/', () => {

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
		it('should yield repeatable results.', () => {
			const sequence = ['x', 'y', 'z'];
			const expectedCount = repeatCount*sequence.length;
			const source = repeatSequence(sequence, repeatCount);
			expect(count(source), 'First count attempt.').equal(expectedCount);
			expect(count(source), 'Second count attempt.').equal(expectedCount);
			expect(toArray(source)).to.have.ordered.members(sequence.concat(sequence).concat(sequence));
		});

	});

});
