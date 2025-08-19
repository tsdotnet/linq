import { ArgumentNullException } from '@tsdotnet/exceptions';

function iterateIndexes(source) {
    if (!source)
        throw new ArgumentNullException('source');
    return {
        *[Symbol.iterator]() {
            const len = source?.length;
            if (len) {
                for (let i = 0; i < len; i++) {
                    yield source[i];
                }
            }
        }
    };
}

export { iterateIndexes as default };
//# sourceMappingURL=iterateIndexes.js.map
