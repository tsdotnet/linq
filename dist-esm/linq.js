/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export class Linq {
    constructor(_source) {
        this._source = _source;
    }
    [Symbol.iterator]() {
        return this._source[Symbol.iterator]();
    }
    filter(...filters) {
        if (!(filters === null || filters === void 0 ? void 0 : filters.length))
            return this;
        let iterable = this._source;
        for (const filter of filters) {
            iterable = filter(iterable);
        }
        return new Linq(iterable);
    }
    toArray() {
        const a = [];
        for (const e of this._source) {
            a.push(e);
        }
        return a;
    }
    resolve(resolution) {
        return resolution(this._source);
    }
}
// export default function linq<T, TResult> (
// 	source: Iterable<T>): Pipe<TResult> {
// 	return new PipeSource(source, filter);
// }
//# sourceMappingURL=linq.js.map