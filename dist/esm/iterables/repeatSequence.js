import { ArgumentNullException } from '@tsdotnet/exceptions';

function repeatSequence(sequence, count) {
    if (!sequence)
        throw new ArgumentNullException('sequence');
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < count; i++) {
                for (const e of sequence) {
                    yield e;
                }
            }
        }
    };
}

export { repeatSequence as default };
//# sourceMappingURL=repeatSequence.js.map
