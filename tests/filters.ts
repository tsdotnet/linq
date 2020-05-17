/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import comparison from '@tsdotnet/compare/dist/comparison';
import Order from '@tsdotnet/compare/dist/Order';
import {expect} from 'chai';
import linq from '../src';
import {
	append,
	buffer,
	defaultIfEmpty,
	distinct,
	exclude,
	ofType,
	onComplete,
	onError,
	onStart,
	orderBy,
	orderUsing,
	prepend,
	reverse,
	skip,
	skipLast,
	skipUntil,
	skipWhile,
	sort,
	take,
	takeLast,
	takeUntil,
	takeWhile
} from '../src/filters';
import {iterateIndexes, range, repeat, repeatSequence} from '../src/iterables';
import {emptyIterable} from '../src/iterables/empty';
import linqExtended from '../src/linqExtended';
import {aggregate, count, first, joinStrings, last, single, toArray} from '../src/resolutions';
import {select} from '../src/transforms';
import testItems from './testItems';
import {testRepeatableResolution} from './testRepeatableResolution';
import ascending = sort.ascending;
import descending = sort.descending;

/* eslint-disable no-empty, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars */

describe('filters/', () => {

	describe('append(e)', () => {
		it('last entry in sequence should be the appended', () => {
			expect(
				linq(['a', 'b', 'c'])
					.filter(append('d'))
					.resolve(last))
				.equal('d');
		});
	});

	describe('buffer(count)', () => {
		const bounds = 10;
		const total = 100;
		it(`should repeat ${total} times`, () => {
			let count = 0;
			for(const e of buffer(bounds)(range(1, 100)))
			{
				expect(e).equal(++count);
			}
			expect(count).equal(total);
		});
	});

	describe('defaultIfEmpty(e)', () => {

		it('should offer a default value if empty', () => {
			expect(
				linq([] as string[])
					.filter(defaultIfEmpty('d'))
					.resolve(single))
				.equal('d');
		});

		it('should contain the sequence if not empty', () => {
			expect(
				linq(['a', 'b', 'c'])
					.filter(defaultIfEmpty('d'))
					.resolve(joinStrings()))
				.equal('abc');
		});

	});

	describe('distinct', () => {
		it('should only produce distinct results', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				'bcdx',
				distinct(['b', 'b', 'c', 'd', 'x', 'd', 'x']),
				joinStrings()
			);
		});
	});

	describe('exclude(exclusions)', () => {
		it('should not include exclusions', () => {
			const sequence = [1, 2, 3, 4, 5, 6, 4];
			expect(toArray(exclude([1, 4])(sequence))).to.have.ordered.members([2, 3, 5, 6]);

			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				'cdd',
				exclude(['b', 'x'])(['b', 'b', 'c', 'd', 'x', 'd', 'x']),
				joinStrings()
			);
		});

		it('should not exclude if no exclusions', () => {
			const sequence = [1, 2, 3, 4, 5, 6, 4];
			expect(toArray(exclude([])(sequence as any))).to.have.ordered.members(sequence);
		});
	});

	describe('ofType(type)', () => {
		const source = [
			1,
			'2',
			true,
			[],
			3,
			'4',
			[],
			false,
			5,
			() => {return 0;},
			'6',
			4,
			true,
			{},
			false,
			[],
			[],
			false,
			[],
			() => {return true;},
			[]
		];
		it('should isolate strings', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				'246',
				ofType(String)(source),
				joinStrings()
			);
		});

		it('should isolate numbers', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				13,
				ofType(Number)(source),
				aggregate((p, c) => p + c, 0)
			);
		});

		it('should isolate booleans', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				5,
				ofType(Boolean)(source),
				count
			);
		});

		it('should isolate functions', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				2,
				ofType(Function)(source),
				count
			);
		});

		it('should isolate specifics', () => {
			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				6,
				ofType(Array)(source),
				count
			);
		});
	});

	describe('onComplete', () => {
		it('should reliably be called even when empty', () => {
			let complete = false;
			// eslint-disable-next-line no-empty
			for(const e of linq(emptyIterable).filter(onComplete(() => complete = true)))
			{ }
			expect(complete).to.be.true;
		});

		it('should reliably be called when finished iterating', () => {
			let complete = false;
			const s = linq(['a', 'b', 'c']).filter(onComplete(() => complete = true));
			expect(complete).to.be.false;
			// noinspection LoopStatementThatDoesntLoopJS
			for(const e of s)
			{
				expect(complete, 'should be false while iterating').to.be.false;
			}
			expect(complete, 'should be true after iterating').to.be.true;
		});
	});

	describe('onError', () => {
		it('should receive errors', () => {
			const error = 'error';
			let errored = false;
			const s = linq({
				* [Symbol.iterator] (): Iterator<string>
				{
					yield 'ok';
					throw error;
				}
			})
				.filter(onError(ex => {
					expect(ex).equal(error);
					errored = true;
				}));
			expect(errored).to.be.false;
			// noinspection LoopStatementThatDoesntLoopJS
			for(const e of s)
			{
				expect(errored).to.be.false;
			}
			expect(errored).to.be.true;
		});
	});

	describe('onStart', () => {
		it('should reliably be called even when empty', () => {
			let complete = false;
			// eslint-disable-next-line no-empty
			for(const e of linq(emptyIterable).filter(onStart(() => complete = true)))
			{ }
			expect(complete).to.be.true;
		});

		it('should reliably be called at start', () => {
			let started = false;
			const s = linq(['a', 'b', 'c']).filter(onStart(() => started = true));
			expect(started).to.be.false;
			// noinspection LoopStatementThatDoesntLoopJS
			for(const e of s)
			{
				expect(started).to.be.true;
				break;
			}
		});
	});

	describe('orderBy/', () => {
		describe('orderBy(keySelector, Order.Ascending)', () => {
			it('should order elements by selected key', () => {
				expect(
					linq(testItems)
						.filter(orderBy(e => e.b))
						.transform(select(e => e.b))
						.filter(distinct)
						.resolve(toArray))
					.to.have.ordered.members([1, 2, 3]);
			});
		});
		describe('orderBy(keySelector, Order.Descending)', () => {
			it('should order elements by selected key', () => {
				expect(
					linq(testItems)
						.filter(orderBy(e => e.b, Order.Descending))
						.transform(select(e => e.b))
						.filter(distinct)
						.resolve(toArray))
					.to.have.ordered.members([3, 2, 1]);
			});
		});
	});

	describe('orderUsing/', () => {
		describe('orderUsing(comparer, Order.Ascending)', () => {
			it('should order elements by selected key', () => {
				expect(
					linq(testItems)
						.filter(orderUsing(comparison.fromKey('b')))
						.transform(select(e => e.b))
						.filter(distinct)
						.resolve(toArray))
					.to.have.ordered.members([1, 2, 3]);
			});
		});
		describe('orderUsing(comparer, Order.Descending)', () => {
			it('should order elements by selected key', () => {
				expect(
					linq(testItems)
						.filter(orderUsing(comparison.fromKey('b'), Order.Descending))
						.transform(select(e => e.b))
						.filter(distinct)
						.resolve(toArray))
					.to.have.ordered.members([3, 2, 1]);
			});
		});
	});

	describe('prepend(e)', () => {
		it('last entry in sequence should be the appended', () => {
			expect(
				linq(['a', 'b', 'c'])
					.filter(prepend('d'))
					.resolve(first))
				.equal('d');
		});
	});

	describe('reverse', () => {
		it('sequence should be reversed', () => {
			expect(
				linqExtended(['a', 'b', 'c'])
					.filter(reverse)
					.toArray())
				.to.have.ordered.members(['c', 'b', 'a']);
			expect(
				linqExtended(iterateIndexes(['a', 'b', 'c']))
					.filter(reverse)
					.toArray())
				.to.have.ordered.members(['c', 'b', 'a']);
		});
	});

	describe('skip', () => {
		const max = 10;
		const total = 100;
		const expected = total - max;

		describe('skip(count)', () => {
			const expected = total - max;
			it(`should repeat ${expected} times`, () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of skip(max)(sequence))
					{
						expect(e).equal(++count + max);
					}
					expect(count).equal(expected);
				}
			});

			it('should be empty if skip is infinite', () => {
				const value = 'x';
				let count = 0;
				for(const e of skip(Infinity)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(0);
			});

			it(`should repeat the total ${total} times if skip is zero`, () => {
				const value = 'x';
				let count = 0;
				for(const e of skip(0)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(total);
			});
		});


		describe('skipLast(count)', () => {

			it(`should repeat the specified ${max} times`, () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of skipLast(max)(sequence))
					{
						count++;
						expect(e).equal(count);
					}
					expect(count).equal(total - max);
				}
			});

			it('should be entire set if skip is zero', () => {
				let count = 0;
				for(const e of skipLast(0)(range(1, total)))
				{
					count++;
				}
				expect(count).equal(total);
			});

			it('should be throw if array pushed', () => {
				const a = toArray(range(1, total));
				expect(attempt).to.throw();

				function attempt (): void
				{
					let count = 0;
					for(const e of skipLast(max)(a))
					{
						count++;
						a.push(1000);
					}
				}
			});

			it('should be empty if skip infinity', () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of skipLast(Infinity)(sequence))
					{
						count++;
						expect(e).equal(count);
					}
					expect(count).equal(0);
				}
			});
		});


		describe('skipWhile(predicate)', () => {
			it(`should repeat ${expected} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of skipWhile((x, i) => i<max)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(expected);
			});
		});

		describe('skipUntil(predicate)', () => {
			it(`should repeat ${expected} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of skipUntil((x, i) => i==max)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(expected);
			});
		});
	});

	describe('take', () => {
		const max = 10;
		const total = 100;
		describe('take(count)', () => {

			it(`should repeat the specified ${max} times`, () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of take(max)(sequence))
					{
						expect(e).equal(++count);
					}
					expect(count).equal(max);
				}
			});

			it('should be empty if take is zero', () => {
				const value = 'x';
				let count = 0;
				for(const e of take(0)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(0);
			});

			it(`should repeat the total ${total} times if take is infinite`, () => {
				const value = 'x';
				let count = 0;
				for(const e of take(Infinity)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(total);
			});
		});


		describe('takeLast(count)', () => {

			it(`should repeat the specified ${max} times`, () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of takeLast(max)(sequence))
					{
						count++;
						expect(e).equal(count + total - max);
					}
					expect(count).equal(max);
				}
			});

			it('should be empty if take is zero', () => {
				let count = 0;
				for(const e of takeLast(0)(range(1, total)))
				{
					count++;
				}
				expect(count).equal(0);
			});

			it('should be throw if array pushed', () => {
				const a = toArray(range(1, total));
				expect(attempt).to.throw();

				function attempt (): void
				{
					let count = 0;
					for(const e of takeLast(max)(a))
					{
						count++;
						a.push(1000);
					}
				}
			});

			it('should be entire set if take is infinity', () => {
				attempt(range(1, total));
				attempt(toArray(range(1, total)));

				function attempt (sequence: Iterable<number>): void
				{
					let count = 0;
					for(const e of takeLast(Infinity)(sequence))
					{
						count++;
						expect(e).equal(count);
					}
					expect(count).equal(total);
				}
			});

			it(`should repeat the total ${total} times if take is infinite`, () => {
				const value = 'x';
				attempt(repeat(value, total));
				attempt(toArray(repeat(value, total)));

				function attempt (sequence: Iterable<string>): void
				{
					let count = 0;
					for(const e of takeLast(Infinity)(sequence))
					{
						count++;
						expect(e).equal(value);
					}
					expect(count).equal(total);
				}
			});
		});

		describe('takeWhile(predicate)', () => {
			it(`should repeat the specified ${max} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of takeWhile((x, i) => i<max)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(max);
			});
		});

		describe('takeUntil(predicate)', () => {
			it(`should repeat the specified ${max} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of takeUntil((x, i) => i>=max)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(max);
			});
		});
	});

	describe('where(predicate)', () => {
		const max = 10;
		const total = 100;
		it('should filter results', () => {
			const value = 'y';
			const s = linqExtended(repeatSequence(['x', 'y', 'z'], total))
				.filter(take(max))
				.where(v => v=='y');

			expect(attempt()).equal(3);
			expect(attempt(), 'Second attempt should match.').equal(3);

			function attempt (): number
			{
				let count = 0;
				for(const e of s)
				{
					count++;
					expect(e).equal(value);
				}
				return count;
			}

		});
	});

	describe('sort', () => {
		const a = Object.freeze([4, 1, 3, 2, 5, 6]);
		describe('ascending', () => {
			it('should be in ascending order', () => {
				let count = 0;
				for(const e of ascending(a)) expect(e).equal(++count);
				count = 0;
				for(const e of ascending(iterateIndexes(a))) expect(e).equal(++count);
			});
		});

		describe('descending', () => {
			it('should be in descending order', () => {
				let count = 6;
				for(const e of descending(a)) expect(e).equal(count--);
				count = 6;
				for(const e of descending(iterateIndexes(a))) expect(e).equal(count--);
			});
		});
	});

});
