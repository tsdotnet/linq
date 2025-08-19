import identity from '../identity.js';

function selectMany(selector = identity) {
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                let i = 0;
                for (const outer of sequence) {
                    for (const inner of selector(outer, i++))
                        yield inner;
                }
            }
        };
    };
}

export { selectMany as default };
//# sourceMappingURL=selectMany.js.map
