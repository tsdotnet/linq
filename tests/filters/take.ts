/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import repeat from '../../src/iterables/repeat';
import take from '../../src/filters/take';

describe('take', () => {
	const max = 10;
	const total = 100;
	it(`should repeat the specified ${max} times`, () => {
		const value = 'x';
		let count = 0;
		for(const e of take(max)(repeat(value, total)))
		{
			count++;
			expect(e).equal(value);
		}
		expect(count).equal(max);
	});

	it('should be empty if take is zero', () => {
		const value = 'x';
		let count = 0;
		for(const e of take(0)(repeat(value, total)))
		{
			count++;
			expect(e).equal(value);
		}
		expect(count).equal(0);
	});

	it(`should repeat the total ${total} times if take is infinite`, () => {
		const value = 'x';
		let count = 0;
		for(const e of take(Infinity)(repeat(value, total)))
		{
			count++;
			expect(e).equal(value);
		}
		expect(count).equal(total);
	});
});
