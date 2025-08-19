function select(selector) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const e of sequence) {
                    yield selector(e, i++);
                }
            }
        };
    };
}

export { select as default };
//# sourceMappingURL=select.js.map
