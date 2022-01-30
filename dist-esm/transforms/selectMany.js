/*
 * @author electricessence / https://github.com/electricessence/
 * @license MIT
 */
import identity from '../identity';
export default function selectMany(selector = identity) {
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
//# sourceMappingURL=selectMany.js.map