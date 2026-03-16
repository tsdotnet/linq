/*!
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */

import repeatSequence from '../src/iterables/repeatSequence.js';
import linqExtended from '../src/linqExtended.js';
import isNotNull from '../src/predicates/isNotNull.js';
import isNotNullOrUndefined from '../src/predicates/isNotNullOrUndefined.js';
import isNotUndefined from '../src/predicates/isNotUndefined.js';
import count from '../src/resolutions/count.js';
import {testRepeatableDelegate, testRepeatableResolution} from './testRepeatableResolution.js';
import { describe, it } from 'vitest';

/* eslint-disable @typescript-eslint/camelcase */

describe('predicates/', () => {

	const repeatCount = 3;
	const sequence = linqExtended(repeatSequence(['x', 'y', undefined, 'z', null], repeatCount));

	describe('isNotNull', () => {

		const filtered = sequence.where(isNotNull);
		it('should filter out nulls', () => {
			testRepeatableResolution(12, filtered, count);
			testRepeatableDelegate(true, () => filtered.all(e => e!==null));
		});
	});

	describe('isNotUndefined', () => {

		const filtered = sequence.where(isNotUndefined);
		it('should filter out undefined', () => {
			testRepeatableResolution(12, filtered, count);
			testRepeatableDelegate(true, () => filtered.all(e => e!==undefined));
		});
	});

	describe('isNotNullOrUndefined', () => {

		const filtered = sequence.where(isNotNullOrUndefined);
		it('should filter out null or undefined', () => {
			testRepeatableResolution(9, filtered, count);
			testRepeatableDelegate(true, () => filtered.all(e => e!=null));
		});
	});
});
