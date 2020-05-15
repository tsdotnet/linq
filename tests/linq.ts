/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq from '../src';
import repeatSequence from '../src/iterables/repeatSequence';
import {joinStrings} from '../src/resolutions/joinStrings';
import notNull from '../src/transforms/notNull';


describe('linq', () => {

	it('should yield repeatable results.', () => {
		const source = linq(repeatSequence(['x', 'y', 'z', null], 3))
			.filter(notNull);

		// noinspection SpellCheckingInspection
		expect(source.resolve(joinStrings()), 'First attempt.')
			.equal('xyzxyzxyz');
		// noinspection SpellCheckingInspection
		expect(source.resolve(joinStrings()), 'Second attempt.')
			.equal('xyzxyzxyz');
	});

});
