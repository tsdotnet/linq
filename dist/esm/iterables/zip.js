import { ArgumentNullException } from '@tsdotnet/exceptions';

function zip(sequence1, sequence2, selector) {
    if (!sequence1)
        throw new ArgumentNullException('sequence1');
    if (!sequence2)
        throw new ArgumentNullException('sequence2');
    if (!selector)
        throw new ArgumentNullException('selector');
    return {
        *[Symbol.iterator]() {
            const i1 = sequence1[Symbol.iterator](), i2 = sequence2[Symbol.iterator]();
            let n1 = i1.next(), n2 = i2.next(), i = 0;
            while (!n1.done || !n2.done) {
                yield selector(n1, n2, i++);
                n1 = i1.next();
                n2 = i2.next();
            }
        }
    };
}

export { zip as default };
//# sourceMappingURL=zip.js.map
