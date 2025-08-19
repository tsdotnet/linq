function notUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e !== undefined)
                    yield e;
        }
    };
}

export { notUndefined as default };
//# sourceMappingURL=notUndefined.js.map
