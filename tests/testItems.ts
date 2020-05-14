/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export interface TestItem
{
	a: number;
	b: number;
	c: string;
	children?: TestItem[];
}


const testItems: TestItem[] = [
	{
		a: 1,
		b: 2,
		c: 'a',
		children: [
			{
				a: 1,
				b: 2,
				c: 'a',
				children: [
					{
						a: 1,
						b: 2,
						c: 'a',
						children: []
					},
					{
						a: 1,
						b: 1,
						c: 'b'
					},
					{
						a: 1,
						b: 3,
						c: 'c'
					}
				]
			},
			{
				a: 1,
				b: 1,
				c: 'b'
			},
			{
				a: 1,
				b: 3,
				c: 'c'
			}
		]
	},
	{
		a: 1,
		b: 1,
		c: 'b'
	},
	{
		a: 1,
		b: 3,
		c: 'c'
	},
	{
		a: 2,
		b: 2,
		c: 'd'
	},
	{
		a: 2,
		b: 1,
		c: 'e'
	},
	{
		a: 2,
		b: 3,
		c: 'f'
	}
];
export default Object.freeze(testItems);
