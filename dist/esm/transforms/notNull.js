function notNull(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== null)
                    yield e;
        }
    };
}

export { notNull as default };
//# sourceMappingURL=notNull.js.map
