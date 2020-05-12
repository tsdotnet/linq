import {expect} from 'chai';
import repeat from '../../src/iterables/repeat';

describe('repeat', () => {
	const max = 10;
	it(`should repeat ${max} times`, () => {
		const value = 'x';
		let count = 0;
		for(const e of repeat(value, max))
		{
			count++;
			expect(e).equal(value);
		}
		expect(count).equal(max);
	});
});
