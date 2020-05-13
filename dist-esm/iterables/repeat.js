/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Generates a sequence that contains one repeated value.
 */
export default function* repeat(item, count = Infinity) {
    for (let i = 0; i < count; i++)
        yield item;
}
//# sourceMappingURL=repeat.js.map