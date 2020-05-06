import empty from '../../src/filters/empty';

describe('empty', () => {
	it('should have no results', () => {
		let count = 0;
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for(const _ of empty())
		{
			count++;
		}
		expect(count).toBe(0);
	});
});
