const doneResult = Object.freeze({
    done: true,
    value: undefined
});
const emptyIterator = Object.freeze({ next() { return doneResult; } });
const emptyIterable = Object.freeze({ [Symbol.iterator]() { return emptyIterator; } });
function empty () {
    return emptyIterable;
}

export { empty as default, doneResult, emptyIterable, emptyIterator };
//# sourceMappingURL=empty.js.map
