/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export function join<T>(
	seed:T,
	valueFactory:SelectorWithIndex<T, T>,
	skipSeed:Boolean = false)
