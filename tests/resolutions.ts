/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq from '../src';
import {emptyIterable} from '../src/iterables/empty';
import count from '../src/resolutions/count';
import {joinStrings} from '../src/resolutions/joinStrings';
import testItems from './testItems';

describe('resolutions/', () => {

	describe('count(sequence)', () => {
		it('should match count to length', () => {
			expect(linq(emptyIterable).resolve(count)).equal(0);
			expect(count(testItems)).equal(testItems.length);
			const source = linq(testItems);
			expect(count(source)).equal(testItems.length);
			expect(source.resolve(count)).equal(testItems.length);
			// ensure replicable.
			expect(source.resolve(count)).equal(testItems.length);
		});
	});

	describe('joinStrings(separator)', () => {
		it('should produce replicable joined results', () => {
			const source = ['x', 'y', 'z'];
			const joined = joinStrings();
			expect(joined(source)).equal('xyz');
			const sLinq = linq(source);
			expect(joined(sLinq)).equal('xyz');
			// Ensure replicable.
			expect(joined(sLinq)).equal('xyz');
		});

		it('should insert separators', () => {
			const source = ['x', 'y', 'z'];
			const joined = joinStrings('|');
			expect(joined(source)).equal('x|y|z');
		});

		it('should have no separator for single entries', () => {
			const source = ['x'];
			const joined = joinStrings('|');
			expect(joined(source)).equal('x');
		});

	});

});
