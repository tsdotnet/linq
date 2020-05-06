/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import repeat from '../../src/iterables/repeat';
import skip from '../../src/filters/skip';

describe('skip', () => {
	const max = 10;
	const total = 100;
	const expected = total - max;
	it(`should repeat ${expected} times`, () => {
		const value = 'x';
		let count = 0;
		for(const e of skip(max)(repeat(value, 100)))
		{
			count++;
			expect(e).toBe(value);
		}
		expect(count).toBe(expected);
	});

	it('should be empty if skip is infinite', () => {
		const value = 'x';
		let count = 0;
		for(const e of skip(Infinity)(repeat(value, 100)))
		{
			count++;
			expect(e).toBe(value);
		}
		expect(count).toBe(0);
	});

	it(`should repeat the total ${total} times if skip is zero`, () => {
		const value = 'x';
		let count = 0;
		for(const e of skip(0)(repeat(value, total)))
		{
			count++;
			expect(e).toBe(value);
		}
		expect(count).toBe(total);
	});
});
