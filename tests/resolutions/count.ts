/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq from '../../src';
import {empty} from '../../src/iterables/empty';
import count from '../../src/resolutions/count';
import testItems from '../testItems';

describe('count(sequence)', () => {
	it('should match count to length', () => {
		expect(linq(testItems).resolve(count)).equal(testItems.length);
		expect(linq(empty).resolve(count)).equal(0);
	});
});
