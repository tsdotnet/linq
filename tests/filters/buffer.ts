/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import buffer from '../../src/filters/buffer';
import range from '../../src/iterables/range';


describe('buffer(count)', () => {
	const bounds = 10;
	const total = 100;
	it(`should repeat ${total} times`, () => {
		let count = 0;
		for(const e of buffer(bounds)(range(1, 100)))
		{
			expect(e).equal(++count);
		}
		expect(count).equal(total);
	});
});
