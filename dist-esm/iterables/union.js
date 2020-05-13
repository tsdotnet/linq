/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import distinct from '../filters/distinct';
import merge from './merge';
/**
 * Produces the set union of all sequences provided..
 */
export default function union(...sequences) {
    return distinct(merge(sequences));
}
//# sourceMappingURL=union.js.map