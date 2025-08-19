function distinct(sequence) {
    return {
        *[Symbol.iterator]() {
            const s = new Set();
            for (const e of sequence) {
                if (s.has(e))
                    continue;
                s.add(e);
                yield e;
            }
            s.clear();
        }
    };
}

export { distinct as default };
//# sourceMappingURL=distinct.js.map
