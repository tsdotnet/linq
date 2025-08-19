import takeWhile from './takeWhile.js';

function takeUntil(predicate) {
    return takeWhile((e, i) => !predicate(e, i));
}

export { takeUntil as default };
//# sourceMappingURL=takeUntil.js.map
