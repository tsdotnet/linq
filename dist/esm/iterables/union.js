import distinct from '../filters/distinct.js';
import merge from './merge.js';

function union(...sequences) {
    return distinct(merge(sequences));
}

export { union as default };
//# sourceMappingURL=union.js.map
