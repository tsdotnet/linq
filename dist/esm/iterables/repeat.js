function repeat(entry, count) {
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++)
                yield entry;
        }
    };
}

export { repeat as default };
//# sourceMappingURL=repeat.js.map
