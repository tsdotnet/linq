import { ArgumentNullException } from '@tsdotnet/exceptions';

function onError(handler) {
    if (!handler)
        throw new ArgumentNullException('action');
    return function (sequence) {
        return {
            *[Symbol.iterator]() {
                const iterator = sequence[Symbol.iterator]();
                let i = 0;
                while (true) {
                    try {
                        const next = iterator.next();
                        if (next.done)
                            break;
                        yield next.value;
                    }
                    catch (ex) {
                        handler(ex, i);
                        break;
                    }
                    i++;
                }
            }
        };
    };
}

export { onError as default };
//# sourceMappingURL=onError.js.map
