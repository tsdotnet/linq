/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import weave from '../../src/transforms/weave';


/* eslint-disable @typescript-eslint/camelcase */

describe('weave(sequences)', () => {
	it('should produce the expected sequence', () => {
		const w = weave([
			[1, 4, 7, 10, 13, 15, 17],
			[2, 5, 8, 11],
			[3, 6, 9, 12, 14, 16]
		]);
		let i = 0;
		for(const e of w)
		{
			expect(e).equal(++i);
		}
		expect(i).equal(17);
	});
});
