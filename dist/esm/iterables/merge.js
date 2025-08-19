import { ArgumentNullException } from '@tsdotnet/exceptions';

function merge(sequences) {
    if (!sequences)
        throw new ArgumentNullException('sequences');
    return {
        *[Symbol.iterator]() {
            for (const s of sequences) {
                for (const e of s) {
                    yield e;
                }
            }
        }
    };
}

export { merge as default };
//# sourceMappingURL=merge.js.map
