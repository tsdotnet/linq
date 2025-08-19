function isEmpty(sequence) {
    return !sequence
        || sequence instanceof Array && (sequence.length === 0)
        || sequence[Symbol.iterator]().next().done === true;
}

export { isEmpty as default };
//# sourceMappingURL=isEmpty.js.map
