import concat from '../iterables/concat.js';
import same from './same.js';

function prepend(...elements) {
    if (elements.length === 0)
        return same;
    return function (sequence) {
        return concat(elements, sequence);
    };
}

export { prepend as default };
//# sourceMappingURL=prepend.js.map
