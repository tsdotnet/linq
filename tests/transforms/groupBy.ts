/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import distinct from '../../src/filters/distinct';
import where from '../../src/filters/where';
import contains from '../../src/resolutions/contains';
import count from '../../src/resolutions/count';
import single from '../../src/resolutions/single';
import toArray from '../../src/resolutions/toArray';
import groupBy, {Grouping} from '../../src/transforms/groupBy';
import select from '../../src/transforms/select';
import testItems, {TestItem} from '../testItems';

/* eslint-disable @typescript-eslint/camelcase */

describe('groupBy(selector)', () => {
	it('should group by key provided by the selector', () => {

		const A_distinct = distinct(select((o: TestItem) => o.a)(testItems));
		const A = groupBy((o: TestItem) => o.a)(testItems);

		expect(count(A)).equal(count(A_distinct), 'Number of groups should match distinct values.');

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
	});
});
