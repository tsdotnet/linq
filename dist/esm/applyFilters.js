function applyFilters(sequence, filters) {
    for (const filter of filters) {
        sequence = filter(sequence);
    }
    return sequence;
}

export { applyFilters as default };
//# sourceMappingURL=applyFilters.js.map
