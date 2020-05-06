/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import testItems from './_testItems';

describe('.groupBy(selector)', () => {
	it('should group by key provided by the selector', () => {


		const A_distinct = testItems
			.select(o => o.a).distinct();
		const A = testItems
			.groupBy(o => o.a);

		assert.equal(A_distinct.count(), A.count(), 'Number of groups should match distinct values.');

		const B = testItems
			.groupBy(o => o.b);

		const C = testItems
			.groupBy(o => o.b, <any>null, <any>Functions.Identity);

		const D = testItems
			.groupBy(o => o.b, Functions.Identity, <any>Functions.Identity);


		assert.ok(B.first().sequenceEqual(C.first()));
		assert.ok(C.first().sequenceEqual(D.first()));

		const B_distinct = testItems
			.select(o => o.b).distinct();

		assert.equal(B_distinct.count(), B.count(), 'Number of groups should match distinct values.');


		const COMPANY_A = 'Microsoft', COMPANY_B = 'Hell Corp.';
		const objArray = [
			{Name: 'John', Id: 0, Salary: 1300.00, Company: COMPANY_A},
			{Name: 'Peter', Id: 1, Salary: 4800.50, Company: COMPANY_A},
			{Name: 'Sandra', Id: 2, Salary: 999.99, Company: COMPANY_A},
			{Name: 'Me', Id: 3, Salary: 1000000000.00, Company: COMPANY_B}
		];
		const groups = Enumerable(objArray).groupBy(x => x.Company);
		const companies = groups.select(x => x.key).toArray();

		assert.equal(companies.length, 2, '2 groups expected.');
		assert.ok(contains(companies, COMPANY_A), 'Expect ' + COMPANY_A);
		assert.ok(contains(companies, COMPANY_B), 'Expect ' + COMPANY_B);
		const group_A = groups.where(g => g.key==COMPANY_A).single();
		const group_B = groups.where(g => g.key==COMPANY_B).single();
		assert.equal(group_A.count(), 3, 'Expected count of 3.');
		assert.equal(group_A.sum(x => x.Salary), 7100.49, 'Expected sum to be correct.');
		assert.equal(group_B.count(), 1, 'Expected count of 1.');
		assert.equal(group_B.sum(x => x.Salary), 1000000000.00, 'Expected sum to be correct.');
	});
});
