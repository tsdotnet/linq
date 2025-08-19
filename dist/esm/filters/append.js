import concat from '../iterables/concat.js';
import same from './same.js';

function append(...elements) {
    if (elements.length === 0)
        return same;
    return function (sequence) {
        return concat(sequence, elements);
    };
}

export { append as default };
//# sourceMappingURL=append.js.map
