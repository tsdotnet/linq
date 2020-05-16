/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import linq, {linqExtended} from '../src';
import {empty, range} from '../src/iterables';
import {emptyIterable} from '../src/iterables/empty';
import {
	aggregate,
	asArray,
	average,
	count,
	elementAt,
	elementAtOrDefault,
	first,
	firstOrDefault,
	hasAny,
	indexOf,
	joinStrings,
	last,
	lastIndexOf,
	lastOrDefault,
	max,
	min,
	product,
	sequenceEqual,
	single,
	singleOrDefault,
	sum,
	sumAndCount,
	toMap
} from '../src/resolutions';
import {MappingMode} from '../src/resolutions/toMap';
import testItems, {TestItem} from './testItems';


describe('resolutions/', () => {

	const a = Object.freeze([4, 1, 3, 2, 5, 2, 6]), c = a;
	const firstValue = a[0];
	const lastValue = a[a.length - 1];
	const b = linq(a);

	describe('hasAny(sequence)', () => {
		it('should return true if not empty', () => {
			expect(hasAny(a)).to.be.true;
			expect(hasAny(b)).to.be.true;
		});

		it('should return false if empty', () => {
			expect(hasAny([])).to.be.false;
			expect(hasAny(linq([]))).to.be.false;
			expect(hasAny(emptyIterable)).to.be.false;
			expect(hasAny(empty())).to.be.false;
		});
	});

	describe('elements/', () => {


		describe('indexOf(value)', () => {
			it('should find the correct index', () => {
				expect(indexOf(1)(a)).equal(1);
				expect(indexOf(1)(b)).equal(1);
			});
			it('should return -1 if not found', () => {
				expect(indexOf(7)(a)).equal(-1);
				expect(indexOf(7)(b)).equal(-1);
			});
		});

		describe('lastIndexOf(value)', () => {
			it('should find the correct index', () => {
				expect(lastIndexOf(1)(a)).equal(1);
				expect(lastIndexOf(1)(b)).equal(1);
				expect(lastIndexOf(2)(a)).equal(5);
				expect(lastIndexOf(2)(b)).equal(5);
			});
			it('should return -1 if not found', () => {
				expect(lastIndexOf(7)(a)).equal(-1);
				expect(lastIndexOf(7)(b)).equal(-1);
			});
		});

		describe('single/', () => {

			const value = 4;
			const a = Object.freeze([value]);
			const b = linq(a);

			describe('single', () => {
				it('should return the entry', () => {
					expect(single(a)).equal(value);
					expect(single(b)).equal(value);
				});
				it('should throw if empty', () => {
					expect(() => single([])).to.throw();
					expect(() => single(linq([]))).to.throw();
				});
				it('should throw if more than one entry', () => {
					expect(() => single(c)).to.throw();
					expect(() => single(linq(c))).to.throw();
				});
			});

			describe('singleOrDefault()', () => {
				it('should return the entry', () => {
					expect(singleOrDefault()(a)).equal(value);
					expect(singleOrDefault()(b)).equal(value);
				});
				it('should return undefined if empty', () => {
					expect(singleOrDefault()([])).to.be.undefined;
					expect(singleOrDefault()(linq([]))).to.be.undefined;
				});
				it('should throw if more than one entry', () => {
					expect(() => singleOrDefault()(c)).to.throw();
					expect(() => singleOrDefault()(linq(c))).to.throw();
				});
			});

			describe('singleOrDefault(value)', () => {
				it('should return the entry', () => {
					expect(singleOrDefault(-1)(a)).equal(value);
					expect(singleOrDefault(-1)(b)).equal(value);
				});
				it('should return the default value if empty', () => {
					expect(singleOrDefault(-1)([])).equal(-1);
					expect(singleOrDefault(-1)(linq([]))).equal(-1);
				});
				it('should throw if more than one entry', () => {
					expect(() => singleOrDefault(-1)(c)).to.throw();
					expect(() => singleOrDefault(-1)(linq(c))).to.throw();
				});
			});

		});

		describe('first/', () => {
			describe('first', () => {
				it('should return the first entry', () => {
					expect(first(a)).equal(firstValue);
					expect(first(b)).equal(firstValue);
				});
				it('should throw if empty', () => {
					expect(() => first([])).to.throw();
					expect(() => first(linq([]))).to.throw();
				});
			});

			describe('firstOrDefault()', () => {
				it('should return the first entry', () => {
					expect(firstOrDefault()(a)).equal(firstValue);
					expect(firstOrDefault()(b)).equal(firstValue);
				});
				it('should return undefined if empty', () => {
					expect(firstOrDefault()([])).to.be.undefined;
					expect(firstOrDefault()(linq([]))).to.be.undefined;
				});
			});

			describe('firstOrDefault(value)', () => {
				it('should return the first entry', () => {
					expect(firstOrDefault(-1)(a)).equal(firstValue);
					expect(firstOrDefault(-1)(b)).equal(firstValue);
				});
				it('should return the default value if empty', () => {
					expect(firstOrDefault(-1)([])).equal(-1);
					expect(firstOrDefault(-1)(linq([]))).equal(-1);
				});
			});
		});

		describe('last/', () => {
			describe('last', () => {
				it('should return the last entry', () => {
					expect(last(a)).equal(lastValue);
					expect(last(b)).equal(lastValue);
				});
				it('should throw if empty', () => {
					expect(() => last([])).to.throw();
					expect(() => last(linq([]))).to.throw();
				});
			});

			describe('lastOrDefault()', () => {
				it('should return the last entry', () => {
					expect(lastOrDefault()(a)).equal(lastValue);
					expect(lastOrDefault()(b)).equal(lastValue);
				});
				it('should return undefined if empty', () => {
					expect(lastOrDefault()([])).to.be.undefined;
					expect(lastOrDefault()(linq([]))).to.be.undefined;
				});
			});

			describe('lastOrDefault(value)', () => {
				it('should return the first entry', () => {
					expect(lastOrDefault(-1)(a)).equal(lastValue);
					expect(lastOrDefault(-1)(b)).equal(lastValue);
				});
				it('should return the default value if empty', () => {
					expect(lastOrDefault(-1)([])).equal(-1);
					expect(lastOrDefault(-1)(linq([]))).equal(-1);
				});
			});

		});

		describe('elementAt/', () => {
			describe('elementAt(index)', () => {
				it('should return the requested entry', () => {
					for(let i = 0; i<a.length; i++)
					{
						expect(elementAt(i)(a)).equal(a[i]);
						expect(elementAt(i)(b)).equal(a[i]);
					}
				});
				it('should throw if out of bounds', () => {
					expect(() => elementAt(-1)(a)).to.throw();
					expect(() => elementAt(a.length)(a)).to.throw();
					expect(() => elementAt(-1)(b)).to.throw();
					expect(() => elementAt(a.length)(b)).to.throw();
				});
			});

			describe('elementAtOrDefault(index)', () => {
				it('should return the requested entry', () => {
					for(let i = 0; i<a.length; i++)
					{
						expect(elementAtOrDefault(i)(a)).equal(a[i]);
						expect(elementAtOrDefault(i)(b)).equal(a[i]);
					}
				});
				it('should throw if negative', () => {
					expect(() => elementAtOrDefault(-1)(a)).to.throw();
					expect(() => elementAtOrDefault(-1)(b)).to.throw();
				});
				it('should return undefined if out of bounds', () => {
					expect(elementAtOrDefault(a.length)(a)).to.be.undefined;
					expect(elementAtOrDefault(a.length)(b)).to.be.undefined;
				});
			});

			describe('elementAtOrDefault(index, defaultValue)', () => {
				it('should return the requested entry', () => {
					for(let i = 0; i<a.length; i++)
					{
						expect(elementAtOrDefault(i, -1)(a)).equal(a[i]);
						expect(elementAtOrDefault(i, -1)(b)).equal(a[i]);
					}
				});
				it('should throw if negative', () => {
					expect(() => elementAtOrDefault(-1, -1)(a)).to.throw();
					expect(() => elementAtOrDefault(-1, -1)(b)).to.throw();
				});
				it('should return the defaultValue if out of bounds', () => {
					expect(elementAtOrDefault(a.length, -1)(a)).to.equal(-1);
					expect(elementAtOrDefault(a.length, -1)(b)).to.equal(-1);
				});
			});

		});

	});

	describe('procedures/', () => {
		const a = [4, 1, 3, 5, 2, 6];

		describe('sumAndCount(sequence)', () => {
			it('should produce the sum of the sequence', () => {
				const result = sumAndCount(a);
				expect(result.count).equal(6);
				expect(result.value).equal(21);
			});
			it('should return zero of no entries', () => {
				const result = sumAndCount([]);
				expect(result.count).equal(0);
				expect(result.value).equal(0);
			});
			it('should return NaN if any are NaN', () => {
				const result = sumAndCount([1, NaN, 2]);
				expect(isNaN(result.count)).to.be.true;
				expect(isNaN(result.value)).to.be.true;
			});
		});

		describe('sum(sequence)', () => {
			it('should produce the sum of the sequence', () => {
				expect(sum(a)).equal(21);
				expect(linqExtended(range(1, 100))
					.where(n => n%2===1)
					.resolve(sum)).equal(2500);
			});
			it('should return zero of no entries', () => {
				expect(sum([])).equal(0);
			});
			it('should return NaN if any are NaN', () => {
				expect(isNaN(sum([1, NaN, 2]))).to.be.true;
			});
		});

		describe('average(sequence)', () => {
			it('should produce the sum of the sequence', () => {
				expect(average(a)).equal(21/a.length);
			});
			it('should throw of no entries', () => {
				expect(() => average([])).to.throw();
			});
			it('should return NaN if any are NaN', () => {
				expect(isNaN(average([1, NaN, 2]))).to.be.true;
			});
		});

		describe('product(sequence)', () => {
			it('should produce the sum of the sequence', () => {
				expect(product(a)).equal(720);
			});
			it('should return NaN of no entries', () => {
				expect(isNaN(product([]))).to.be.true;
			});
			it('should return NaN if any are NaN', () => {
				expect(isNaN(product([1, NaN, 2]))).to.be.true;
			});
		});

		describe('min(sequence)', () => {
			it('should produce the min of the sequence', () => {
				expect(min(a)).equal(1);
			});
			it('should throw if no entries', () => {
				expect(() => min([])).to.throw();
			});
			it('should ignore NaN', () => {
				expect(min([1, NaN, 2])).equal(1);
			});
		});

		describe('max(sequence)', () => {
			it('should produce the max of the sequence', () => {
				expect(max(a)).equal(6);
			});
			it('should throw if no entries', () => {
				expect(() => max([])).to.throw();
			});
			it('should ignore NaN', () => {
				expect(max([1, NaN, 2])).equal(2);
			});
		});
	});

	describe('sequenceEqual(sequence)', () => {
		it('should return true if sequence matches', () => {
			const sequence = [1, 2, 3, 4];
			expect(sequenceEqual(sequence)(sequence)).to.be.true;
			expect(sequenceEqual(linq(sequence))(sequence)).to.be.true;
		});

		it('should return false if sequence does not match', () => {
			const sequence = [1, 2, 3, 4];
			expect(sequenceEqual(sequence)([1, 2, 3, 4, 5])).to.be.false;
			expect(sequenceEqual(sequence)([2, 3, 4, 5])).to.be.false;
		});
	});


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

	describe('aggregate(reduction)', () => {
		const fn = (p: number, c: number, i: number): number => p + c + i;
		it('should throw for empty collection', () => {
			expect(() => aggregate(fn)([])).to.throw();
		});
		it('should resolve first value if only one', () => {
			expect(aggregate(fn)([10])).equal(10);
		});
		it('should resolve sequence as expected', () => {
			expect(aggregate(fn)([1, 2, 3, 4])).equal(16);
		});
	});

	describe('aggregate(reduction, initialValue)', () => {
		const fn = (p: number, c: number, i: number): number => p + c + i;
		it('should resolve initialValue if empty', () => {
			expect(aggregate(fn, 10)([])).equal(10);
		});
		it('should resolve sequence as expected', () => {
			expect(aggregate(fn, 10)([1, 2, 3, 4])).equal(26);
		});
	});

	describe('asArray(sequence)', () => {
		const a = [1, 2, 3];
		it('should return the original array', () => {
			expect(asArray(a)).equal(a);
		});
		it('should return the contents of the array', () => {
			expect(asArray(linq(a))).has.ordered.members(a);
		});
	});

	describe('toMap(sequence, MappingMode.Throw)', () => {
		it('should not throw if no duplicates', () => {
			expect(() => toMap<TestItem, number>(e => e.b)(testItems[0]!.children!)).to.not.throw();
			expect(toMap<TestItem, number>(e => e.b)(testItems[0]!.children!).get(3)!.c).equal('c');
			expect(toMap<TestItem, number, string>(e => e.b, e => e.c)(testItems[0]!.children!).get(3)).equal('c');
		});
		it('should throw for duplicates', () => {
			expect(() => toMap<TestItem, number>(e => e.a)(testItems)).to.throw(); // Duplicate keys.
		});
	});

	describe('toMap(sequence, MappingMode.Keep)', () => {
		it('should keep any existing values', () => {
			expect(() => toMap<TestItem, number>(e => e.b, MappingMode.Keep)(testItems)).to.not.throw();
			expect(toMap<TestItem, number>(e => e.b, MappingMode.Keep)(testItems).get(2)!.c).equal('a');
			expect(toMap<TestItem, number, string>(e => e.b, e => e.c, MappingMode.Keep)(testItems).get(2)).equal('a');
		});
	});

	describe('toMap(sequence, MappingMode.Overwrite)', () => {
		it('should overwrite existing values', () => {
			expect(() => toMap<TestItem, number>(e => e.b, MappingMode.Overwrite)(testItems)).to.not.throw();
			expect(toMap<TestItem, number>(e => e.b, MappingMode.Overwrite)(testItems).get(2)!.c).equal('d');
			expect(toMap<TestItem, number, string>(e => e.b, e => e.c, MappingMode.Overwrite)(testItems).get(2)).equal('d');
		});
	});
});
