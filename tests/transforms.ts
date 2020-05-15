/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq from '../src';
import distinct from '../src/filters/distinct';
import where from '../src/filters/where';
import repeatSequence from '../src/iterables/repeatSequence';
import linqExtended from '../src/linqExtended';
import contains from '../src/resolutions/contains';
import count from '../src/resolutions/count';
import {joinStrings} from '../src/resolutions/joinStrings';
import single from '../src/resolutions/single';
import toArray from '../src/resolutions/toArray';
import groupBy, {Grouping} from '../src/transforms/groupBy';
import notNull from '../src/transforms/notNull';
import notNullOrUndefined from '../src/transforms/notNullOrUndefined';
import notUndefined from '../src/transforms/notUndefined';
import rows from '../src/transforms/rows';
import select from '../src/transforms/select';
import weave from '../src/transforms/weave';
import testItems, {TestItem} from './testItems';
import {testRepeatableResolution} from './testRepeatableResolution';

/* eslint-disable @typescript-eslint/camelcase */

describe('transforms/', () => {

	describe('nullable/', () => {
		describe('notNull', () => {
			const repeatCount = 3;

			it('should filter out nulls', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notNull(repeatSequence(['x', 'y', 'z', null], repeatCount)),
					joinStrings());

			});

			it('should filter out nulls but retain undefined', () => {
				const source = ['x', 'y', undefined, 'z', null];
				const expectedTotal = (source.length - 1)*repeatCount;
				testRepeatableResolution(
					expectedTotal,
					notNull(repeatSequence(source, repeatCount)),
					count);
				testRepeatableResolution(
					expectedTotal,
					linq(repeatSequence(source, repeatCount))
						.filter(notNull),
					count);
				testRepeatableResolution(
					repeatCount,
					linqExtended(repeatSequence(source, repeatCount))
						.filter(notNull)
						.where(e => e===undefined),
					count);
			});

		});

		describe('notUndefined', () => {
			const repeatCount = 3;

			it('should filter out undefined', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notUndefined(repeatSequence(['x', 'y', 'z', undefined], repeatCount)),
					joinStrings());

			});

			it('should filter out nulls but retain nulls', () => {
				const source = ['x', 'y', undefined, 'z', null];
				const expectedTotal = (source.length - 1)*repeatCount;
				testRepeatableResolution(
					expectedTotal,
					notUndefined(repeatSequence(source, repeatCount)),
					count);
				testRepeatableResolution(
					expectedTotal,
					linq(repeatSequence(source, repeatCount))
						.filter(notUndefined),
					count);
				testRepeatableResolution(
					repeatCount,
					linqExtended(repeatSequence(source, repeatCount))
						.filter(notUndefined)
						.where(e => e===null),
					count);
			});

		});

		describe('notNullOrUndefined', () => {
			const repeatCount = 3;

			it('should filter out nulls and undefined', () => {
				// noinspection SpellCheckingInspection
				testRepeatableResolution(
					'xyzxyzxyz',
					notNullOrUndefined(repeatSequence([
						'x',
						'y',
						undefined,
						'z',
						null
					], repeatCount)),
					joinStrings());

			});
		});
	});


	describe('groupBy(selector)', () => {
		it('should group by key provided by the selector', () => {

			const A_distinct = toArray(distinct(select((o: TestItem) => o.a)(testItems)));
			const A = groupBy((o: TestItem) => o.a)(testItems);
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


	describe('rows(columns)', () => {

		type CellValue = number | undefined;

		it('should produce the expected sequence', () => {
			const w = rows([
				[1, 4, 7, 10, 13, 15, 17],
				[2, 5, 8, 11],
				[3, 6, 9, 12, 14, 16]
			]);

			expect(attempt()).equal(7);
			expect(attempt(), 'Second attempt should match.').equal(7);

			function attempt (): number
			{
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
				return i;
			}

		});
	});


	describe('weave(sequences)', () => {
		it('should produce the expected sequence', () => {
			const w = weave([
				[1, 4, 7, 10, 13, 15, 17],
				[2, 5, 8, 11],
				[3, 6, 9, 12, 14, 16]
			]);

			expect(attempt()).equal(17);
			expect(attempt(), 'Second attempt should match.').equal(17);

			function attempt (): number
			{
				let i = 0;
				for(const e of w)
				{
					expect(e).equal(++i);
				}
				return i;
			}
		});
	});
});
