import LinqBase from './LinqBase.js';
import all from './resolutions/all.js';
import any from './resolutions/any.js';
import count from './resolutions/count.js';
import toArray from './resolutions/toArray.js';
import single from './resolutions/single.js';
import singleOrDefault from './resolutions/singleOrDefault.js';
import first from './resolutions/first.js';
import firstOrDefault from './resolutions/firstOrDefault.js';
import last from './resolutions/last.js';
import lastOrDefault from './resolutions/lastOrDefault.js';

class LinqExtendedBase extends LinqBase {
    constructor(source, create) {
        super(source, create);
    }
    toArray() {
        return toArray(this.source);
    }
    count(predicate) {
        return count(predicate ? this.where(predicate) : this.source);
    }
    any(predicate) {
        return any(predicate)(this.source);
    }
    all(predicate) {
        return all(predicate)(this.source);
    }
    single(predicate) {
        return single(predicate ? this.where(predicate) : this.source);
    }
    singleOrDefault(defaultValue, predicate) {
        return singleOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    singleOrUndefined(predicate) {
        return singleOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
    singleOrNull(predicate) {
        return singleOrDefault(null)(predicate ? this.where(predicate) : this.source);
    }
    first(predicate) {
        return first(predicate ? this.where(predicate) : this.source);
    }
    firstOrDefault(defaultValue, predicate) {
        return firstOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    firstOrUndefined(predicate) {
        return firstOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
    firstOrNull(predicate) {
        return firstOrDefault(null)(predicate ? this.where(predicate) : this.source);
    }
    last(predicate) {
        return last(predicate ? this.where(predicate) : this.source);
    }
    lastOrDefault(defaultValue, predicate) {
        return lastOrDefault(defaultValue)(predicate ? this.where(predicate) : this.source);
    }
    lastOrUndefined(predicate) {
        return lastOrDefault(undefined)(predicate ? this.where(predicate) : this.source);
    }
    lastOrNull(predicate) {
        return lastOrDefault(null)(predicate ? this.where(predicate) : this.source);
    }
}

export { LinqExtendedBase as default };
//# sourceMappingURL=LinqExtendedBase.js.map
