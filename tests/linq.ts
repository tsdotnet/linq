/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq from '../src';
import distinct from '../src/filters/distinct';
import where from '../src/filters/where';
import {emptyIterable} from '../src/iterables/empty';
import repeatSequence from '../src/iterables/repeatSequence';
import linqExtended from '../src/linqExtended';
import contains from '../src/resolutions/contains';
import count from '../src/resolutions/count';
import elementAt from '../src/resolutions/elementAt';
import {joinStrings} from '../src/resolutions/joinStrings';
import single from '../src/resolutions/single';
import toArray from '../src/resolutions/toArray';
import groupBy, {Grouping} from '../src/transforms/groupBy';
import notNull from '../src/transforms/notNull';
import select from '../src/transforms/select';
import testItems, {TestItem} from './testItems';
import {testRepeatableDelegate, testRepeatableResolution} from './testRepeatableResolution';

/* eslint-disable @typescript-eslint/camelcase */

const repeatCount = 3;
const source = Object.freeze(['x', 'y', 'z', null]);
const sequence = repeatSequence(source, repeatCount);
const expectedLength = repeatCount*source.length;

describe('linq', () => {
	const linqInstance = linq(sequence);

	describe('.filter(...filters)', () => {
		it('should filter results', () => {
			testRepeatableResolution(
				['y'],
				linqInstance.filter(notNull).filter(where(e => e==='y'), distinct));
		});
	});

	describe('.transform(...filters)', () => {
		it('should filter results', () => {
			testRepeatableResolution(
				['ay', 'ay', 'ay'],
				linqInstance.filter(notNull).filter(where(e => e==='y')).transform(select(e => 'a' + e)));
		});
	});
});

describe('linqExtended', () => {
	const linqInstance = linqExtended(sequence);

	it('should yield repeatable results', () => {
		// noinspection SpellCheckingInspection
		testRepeatableResolution(
			'xyzxyzxyz',
			linqInstance.filter(notNull),
			joinStrings());
	});

	describe('.count()', () => {
		it('should count total items', () => {
			testRepeatableDelegate(expectedLength, () => linqInstance.count());
		});
	});

	describe('.count(predicate)', () => {
		it('should count specific items', () => {
			testRepeatableDelegate(repeatCount, () => linqInstance.count(e => e==='y'));
		});
	});

	describe('.any()', () => {
		it('should return true if not empty', () => {
			testRepeatableDelegate(true, () => linqInstance.any());
		});

		it('should false if empty', () => {
			testRepeatableDelegate(false, () => linqExtended([]).any());
			testRepeatableDelegate(false, () => linqExtended(emptyIterable).any());
		});
	});

	describe('.any(predicate)', () => {
		it('should return true predicate returns true (found)', () => {
			testRepeatableDelegate(true, () => linqInstance.any(e => e==='y'));
		});
		it('should return true predicate returns false (not found)', () => {
			testRepeatableDelegate(false, () => linqInstance.any(e => e==='a'));
		});
	});

	describe('.all(predicate)', () => {
		it('should return true if predicate is always true', () => {
			testRepeatableDelegate(true, () => linqInstance.all(e => e!=='a'));
		});
		it('should return false if predicate returns false (not found)', () => {
			testRepeatableDelegate(false, () => linqInstance.all(e => e==='x'));
		});
	});

	describe('.where(predicate)', () => {
		it('should filter results', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				'xyxyxy',
				linqInstance.filter(notNull).where(e => e!=='z'),
				joinStrings());
		});
	});

	describe('.toArray()', () => {
		it('should filter results', () => {
			// noinspection SpellCheckingInspection
			testRepeatableDelegate('xyzxyzxyz', () => linqInstance.filter(notNull).toArray().join(''));
		});
	});

	describe('.select()', () => {
		it('should filter results', () => {
			// noinspection SpellCheckingInspection
			testRepeatableDelegate('abcdef', () => linqExtended(testItems).select(o => o.c).toArray().join(''));
		});
	});

	describe('.groupBy(selector)', () => {

		it('should be able to cherry pick item', () => {
			const grouping = linqExtended([
				{a: 1, b: 'x'},
				{a: 2, b: 'x'},
				{a: 3, b: 'x'},
				{a: 1, b: 'y'},
				{a: 2, b: 'y'},
				{a: 3, b: 'y'},
				{a: 1, b: 'z'},
				{a: 2, b: 'z'},
				{a: 3, b: 'z'}
			])
				.groupBy(o => o.a)
				.resolve(elementAt(1)) // second group only.
				.select(o => o.b);

			testRepeatableResolution(
				'y',
				grouping,
				elementAt(1)
			);

		});

		it('should group by key provided by the selector', () => {

			const A_distinct = toArray(distinct(select((o: TestItem) => o.a)(testItems)));
			const A = linqExtended(testItems).groupBy(o => o.a);
			attempt();
			attempt();

			function attempt (): void
			{
				expect(count(A)).equal(A_distinct.length, 'Number of groups should match distinct values.');

				const B = groupBy((o: TestItem) => o.b)(testItems);
				const B_distinct = distinct(select((o: TestItem) => o.b)(testItems));

				expect(count(B)).equal(count(B_distinct), 'Number of groups should match distinct values.');

				const COMPANY_A = 'Microsoft', COMPANY_B = 'Hell Corp.';
				const objArray = [
					{Name: 'John', Id: 0, Salary: 1300.00, Company: COMPANY_A},
					{Name: 'Peter', Id: 1, Salary: 4800.50, Company: COMPANY_A},
					{Name: 'Sandra', Id: 2, Salary: 999.99, Company: COMPANY_A},
					{Name: 'Me', Id: 3, Salary: 1000000000.00, Company: COMPANY_B}
				];
				const groups = toArray(groupBy<string, any>(x => x.Company)(objArray));
				const companies = toArray(select((x: Grouping<string, any>) => x.key)(groups));

				expect(companies.length).equal(2, 'Groups expected.');
				expect(contains(COMPANY_A)(companies)).to.be.true;
				expect(contains(COMPANY_B)(companies)).to.be.true;
				const group_A = single(where((g: any) => g.key==COMPANY_A)(groups));
				const group_B = single(where((g: any) => g.key==COMPANY_B)(groups));
				expect(count(group_A)).equal(3);
				// assert.equal(group_A.sum(x => x.Salary), 7100.49, 'Expected sum to be correct.');
				expect(count(group_B)).equal(1);
				// assert.equal(group_B.sum(x => x.Salary), 1000000000.00, 'Expected sum to be correct.');
			}

		});
	});
});
