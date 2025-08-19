import { ArgumentNullException } from '@tsdotnet/exceptions';

function onComplete(action) {
    if (!action)
        throw new ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    yield e;
                action();
            }
        };
    };
}

export { onComplete as default };
//# sourceMappingURL=onComplete.js.map
