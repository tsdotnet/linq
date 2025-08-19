import skipWhile from './skipWhile.js';

function skipUntil(predicate) {
    return skipWhile((e, i) => !predicate(e, i));
}

export { skipUntil as default };
//# sourceMappingURL=skipUntil.js.map
