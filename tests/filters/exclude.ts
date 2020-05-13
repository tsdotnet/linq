/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import exclude from '../../src/filters/exclude';
import toArray from '../../src/resolutions/toArray';

describe('exclude(exclusions)', () => {
	it('should not include exclusions', () => {
		const sequence = [1, 2, 3, 4, 5, 6, 4];
		expect(toArray(exclude([1, 4])(sequence))).members([2, 3, 5, 6]);
	});
});
