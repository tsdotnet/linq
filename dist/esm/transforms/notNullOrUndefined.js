function notNullOrUndefined(sequence) {
    return {
        *[Symbol.iterator]() {
            for (const e of sequence)
                if (e != null)
                    yield e;
        }
    };
}

export { notNullOrUndefined as default };
//# sourceMappingURL=notNullOrUndefined.js.map
