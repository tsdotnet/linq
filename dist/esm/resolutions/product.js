import { ArgumentNullException } from '@tsdotnet/exceptions';

function product(sequence) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    let product = 1, hasEntries = false;
    for (const s of sequence) {
        if (isNaN(s))
            return NaN;
        hasEntries = true;
        product *= s;
    }
    return hasEntries ? product : NaN;
}

export { product as default };
//# sourceMappingURL=product.js.map
