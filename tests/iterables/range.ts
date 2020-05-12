import {expect} from 'chai';
import range from '../../src/iterables/range';

describe('range', () => {
	const max = 10;
	it(`should produce ${10} consecutive numbers`, () => {
		let count = 0;
		for(const i of range(1, max))
		{
			expect(i).equal(++count);
		}
		expect(count).equal(max);
	});
});
