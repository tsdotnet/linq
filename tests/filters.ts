/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {expect} from 'chai';
import append from '../src/filters/append';
import buffer from '../src/filters/buffer';
import defaultIfEmpty from '../src/filters/defaultIfEmpty';
import distinct from '../src/filters/distinct';
import exclude from '../src/filters/exclude';
import ofType from '../src/filters/ofType';
import onComplete from '../src/filters/onComplete';
import onError from '../src/filters/onError';
import onStart from '../src/filters/onStart';
import prepend from '../src/filters/prepend';
import skip from '../src/filters/skip';
import skipUntil from '../src/filters/skipUntil';
import skipWhile from '../src/filters/skipWhile';
import take from '../src/filters/take';
import takeUntil from '../src/filters/takeUntil';
import takeWhile from '../src/filters/takeWhile';
import {emptyIterable} from '../src/iterables/empty';
import range from '../src/iterables/range';
import repeat from '../src/iterables/repeat';
import repeatSequence from '../src/iterables/repeatSequence';
import linq from '../src/linq';
import linqExtended from '../src/linqExtended';
import aggregate from '../src/resolutions/aggregate';
import count from '../src/resolutions/count';
import first from '../src/resolutions/first';
import {joinStrings} from '../src/resolutions/joinStrings';
import last from '../src/resolutions/last';
import single from '../src/resolutions/single';
import toArray from '../src/resolutions/toArray';
import {testRepeatableResolution} from './testRepeatableResolution';

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
			expect(toArray(exclude([1, 4])(sequence))).members([2, 3, 5, 6]);

			// noinspection SpellCheckingInspection
			testRepeatableResolution(
				'cdd',
				exclude(['b', 'x'])(['b', 'b', 'c', 'd', 'x', 'd', 'x']),
				joinStrings()
			);
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
		it('should reliably be called even when empty.', () => {
			let complete = false;
			// eslint-disable-next-line no-empty
			for(const e of linq(emptyIterable).filter(onComplete(() => complete = true)))
			{ }
			expect(complete).to.be.true;
		});

		it('should reliably be called when finished iterating.', () => {
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
		it('should receive errors.', () => {
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
		it('should reliably be called even when empty.', () => {
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

	describe('prepend(e)', () => {
		it('last entry in sequence should be the appended', () => {
			expect(
				linq(['a', 'b', 'c'])
					.filter(prepend('d'))
					.resolve(first))
				.equal('d');
		});
	});


	describe('skip', () => {
		const max = 10;
		const total = 100;
		const expected = total - max;

		describe('skip(count)', () => {
			const expected = total - max;
			it(`should repeat ${expected} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of skip(max)(repeat(value, 100)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(expected);
			});

			it('should be empty if skip is infinite', () => {
				const value = 'x';
				let count = 0;
				for(const e of skip(Infinity)(repeat(value, 100)))
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


		describe('skipWhile(predicate)', () => {
			it(`should repeat ${expected} times`, () => {
				const value = 'x';
				let count = 0;
				for(const e of skipWhile((x, i) => i<max)(repeat(value, 100)))
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
				for(const e of skipUntil((x, i) => i==max)(repeat(value, 100)))
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
				const value = 'x';
				let count = 0;
				for(const e of take(max)(repeat(value, total)))
				{
					count++;
					expect(e).equal(value);
				}
				expect(count).equal(max);
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
});
