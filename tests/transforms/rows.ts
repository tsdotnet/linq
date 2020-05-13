/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import rows from '../../src/transforms/rows';

type CellValue = number | undefined;

/* eslint-disable @typescript-eslint/camelcase */

describe('rows(columns)', () => {
	it('should produce the expected sequence', () => {
		const w = rows([
			[1, 4, 7, 10, 13, 15, 17],
			[2, 5, 8, 11],
			[3, 6, 9, 12, 14, 16]
		]);
		let i = 0;
		for(const row of w)
		{
			let expected: CellValue[] = [];
			switch(i++)
			{
				case 0:
					expected = [1, 2, 3];
					break;
				case 1:
					expected = [4, 5, 6];
					break;
				case 2:
					expected = [7, 8, 9];
					break;
				case 3:
					expected = [10, 11, 12];
					break;
				case 4:
					expected = [13, undefined, 14];
					break;
				case 5:
					expected = [15, undefined, 16];
					break;
				case 6:
					expected = [17, undefined, undefined];
					break;

			}
			expect(row.map(c => c?.value)).members(expected);
		}
		expect(i).equal(7);
	});
});
