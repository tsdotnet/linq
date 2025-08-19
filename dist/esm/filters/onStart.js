import { ArgumentNullException } from '@tsdotnet/exceptions';

function onStart(action) {
    if (!action)
        throw new ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                action();
                for (const e of sequence)
                    yield e;
            }
        };
    };
}

export { onStart as default };
//# sourceMappingURL=onStart.js.map
