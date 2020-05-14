/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export const doneResult = Object.freeze({
    done: true,
    value: undefined
});
export const emptyIterator = Object.freeze({ next() { return doneResult; } });
export const empty = Object.freeze({ [Symbol.iterator]() { return emptyIterator; } });
export default function () {
    return empty;
}
//# sourceMappingURL=empty.js.map