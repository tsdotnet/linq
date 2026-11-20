(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsdotnet/memoize'), require('@tsdotnet/exceptions'), require('@tsdotnet/compare'), require('@tsdotnet/queue'), require('@tsdotnet/integer'), require('@tsdotnet/linked-node-list')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsdotnet/memoize', '@tsdotnet/exceptions', '@tsdotnet/compare', '@tsdotnet/queue', '@tsdotnet/integer', '@tsdotnet/linked-node-list'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.linq = global.tsdotnet.linq || {}), global.tsdotnet.memoize, global.tsdotnet.exceptions, global.tsdotnet.compare, global.tsdotnet.queue, global.tsdotnet.integer, global.tsdotnet.linkedNodeList));
})(this, (function (exports, memoize, exceptions, compare, Queue, integer, linkedNodeList) { 'use strict';

    function merge(sequences) {
        if (!sequences)
            throw new exceptions.ArgumentNullException('sequences');
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

    function concat(...sequences) {
        return merge(sequences);
    }

    function same(sequence) {
        return sequence;
    }

    function append(...elements) {
        if (elements.length === 0)
            return same;
        return function (sequence) {
            return concat(sequence, elements);
        };
    }

    function toArray(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence.slice();
        const result = [];
        for (const e of sequence)
            result.push(e);
        return result;
    }

    function ascending(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort(compare.compare.primitives))
                    yield e;
            }
        };
    }

    function buffer(size) {
        if (size <= 0)
            return same;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    const q = new Queue();
                    for (const e of sequence) {
                        q.enqueue(e);
                        if (q.count > size)
                            yield q.dequeue(true);
                    }
                    while (!q.isEmpty)
                        yield q.dequeue(true);
                }
            };
        };
    }

    function defaultIfEmpty(defaultValue) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let hasElements = false;
                    for (const e of sequence) {
                        hasElements = true;
                        yield e;
                    }
                    if (!hasElements)
                        yield defaultValue;
                }
            };
        };
    }

    function descending(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of toArray(sequence).sort(compare.compare.primitives.inverted))
                    yield e;
            }
        };
    }

    function distinct(sequence) {
        return {
            *[Symbol.iterator]() {
                const s = new Set();
                for (const e of sequence) {
                    if (s.has(e))
                        continue;
                    s.add(e);
                    yield e;
                }
                s.clear();
            }
        };
    }

    function exclude(exclusions) {
        if (!exclusions)
            return same;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    const x = new Set();
                    const xi = exclusions[Symbol.iterator]();
                    let n = xi.next();
                    if (n.done) {
                        for (const s of sequence)
                            yield s;
                        return;
                    }
                    x.add(n.value);
                    let done = false;
                    for (const s of sequence) {
                        if (x.has(s))
                            continue;
                        while (!done) {
                            n = xi.next();
                            if (n.done) {
                                done = true;
                                break;
                            }
                            else {
                                x.add(n.value);
                                if (!x.has(s))
                                    break;
                            }
                        }
                        yield s;
                    }
                    x.clear();
                }
            };
        };
    }

    function where(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const e of sequence) {
                        if (predicate(e, i++))
                            yield e;
                    }
                }
            };
        };
    }

    function ofType(type) {
        let typeName;
        switch (type) {
            case Number:
                typeName = 'number';
                break;
            case String:
                typeName = 'string';
                break;
            case Boolean:
                typeName = 'boolean';
                break;
            case Function:
                typeName = 'function';
                break;
            default:
                return where(e => e instanceof type);
        }
        return where(e => typeof e === typeName);
    }

    function onComplete(action) {
        if (!action)
            throw new exceptions.ArgumentNullException('action');
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

    function onError(handler) {
        if (!handler)
            throw new exceptions.ArgumentNullException('action');
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

    function onStart(action) {
        if (!action)
            throw new exceptions.ArgumentNullException('action');
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

    function orderBy(keySelector, order = compare.Order.Ascending) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    for (const e of toArray(sequence).sort((a, b) => compare.compare.primitives(keySelector(a), keySelector(b)) * order)) {
                        yield e;
                    }
                }
            };
        };
    }

    function orderUsing(comparison, order = compare.Order.Ascending) {
        if (!comparison)
            throw new exceptions.ArgumentNullException('comparison');
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    for (const e of toArray(sequence).sort(order == compare.Order.Descending
                        ? ((a, b) => comparison(a, b) * -1)
                        : comparison)) {
                        yield e;
                    }
                }
            };
        };
    }

    function prepend(...elements) {
        if (elements.length === 0)
            return same;
        return function (sequence) {
            return concat(elements, sequence);
        };
    }

    function reverse(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        return {
            *[Symbol.iterator]() {
                if (sequence instanceof Array) {
                    const len = sequence.length;
                    for (let i = len - 1; i >= 0; i--) {
                        if (len !== sequence.length)
                            throw Error('Array length changed during iteration.');
                        yield sequence[i];
                    }
                    return;
                }
                for (const e of toArray(sequence).reverse()) {
                    yield e;
                }
            }
        };
    }

    const doneResult = Object.freeze({
        done: true,
        value: undefined
    });
    const emptyIterator = Object.freeze({ next() { return doneResult; } });
    const emptyIterable = Object.freeze({ [Symbol.iterator]() { return emptyIterator; } });
    function empty () {
        return emptyIterable;
    }

    function skip(count) {
        if (isNaN(count) || count <= 0)
            return same;
        if (!isFinite(count))
            return empty;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    if (sequence instanceof Array) {
                        const len = sequence.length;
                        for (let i = count; i < len; i++) {
                            if (len !== sequence.length)
                                throw Error('Array length changed during iteration.');
                            yield sequence[i];
                        }
                        return;
                    }
                    let remain = count;
                    for (const e of sequence) {
                        if (0 < remain--)
                            continue;
                        yield e;
                    }
                }
            };
        };
    }

    function skipLast(count) {
        if (isNaN(count) || count <= 0)
            return same;
        if (!isFinite(count))
            return empty;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    if (sequence instanceof Array) {
                        const len = sequence.length;
                        for (let i = 0; i < len - count; i++) {
                            if (len !== sequence.length)
                                throw Error('Array length changed during iteration.');
                            yield sequence[i];
                        }
                        return;
                    }
                    const q = new Queue();
                    for (const e of sequence) {
                        q.enqueue(e);
                        if (q.count > count)
                            yield q.dequeue(true);
                    }
                    q.clear();
                }
            };
        };
    }

    function skipWhile(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0, skipped = false;
                    for (const e of sequence) {
                        if (skipped || !predicate(e, i)) {
                            skipped = true;
                            yield e;
                        }
                        i++;
                    }
                }
            };
        };
    }

    function skipUntil(predicate) {
        return skipWhile((e, i) => !predicate(e, i));
    }

    function take(count) {
        if (count <= 0)
            return empty;
        if (!isFinite(count))
            return same;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    if (sequence instanceof Array) {
                        const len = sequence.length;
                        count = Math.min(count, len);
                        for (let i = 0; i < count; i++) {
                            if (len !== sequence.length)
                                throw Error('Array length changed during iteration.');
                            yield sequence[i];
                        }
                        return;
                    }
                    let remain = count;
                    for (const e of sequence) {
                        yield e;
                        if (--remain <= 0)
                            break;
                    }
                }
            };
        };
    }

    function takeLast(count) {
        if (count <= 0)
            return empty;
        if (!isFinite(count))
            return same;
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    if (sequence instanceof Array) {
                        const len = sequence.length;
                        for (let i = Math.max(0, len - count); i < len; i++) {
                            if (len !== sequence.length)
                                throw Error('Array length changed during iteration.');
                            yield sequence[i];
                        }
                        return;
                    }
                    const q = new Queue();
                    for (const e of sequence) {
                        q.enqueue(e);
                        if (q.count > count)
                            q.dequeue(true);
                    }
                    for (const e of q.consumer())
                        yield e;
                }
            };
        };
    }

    function takeWhile(predicate) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const e of sequence) {
                        if (!predicate(e, i++))
                            break;
                        yield e;
                    }
                }
            };
        };
    }

    function takeUntil(predicate) {
        return takeWhile((e, i) => !predicate(e, i));
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * @license MIT
     */

    var filters = /*#__PURE__*/Object.freeze({
        __proto__: null,
        append: append,
        ascending: ascending,
        buffer: buffer,
        defaultIfEmpty: defaultIfEmpty,
        descending: descending,
        distinct: distinct,
        exclude: exclude,
        memoize: memoize,
        ofType: ofType,
        onComplete: onComplete,
        onError: onError,
        onStart: onStart,
        orderBy: orderBy,
        orderUsing: orderUsing,
        prepend: prepend,
        reverse: reverse,
        skip: skip,
        skipLast: skipLast,
        skipUntil: skipUntil,
        skipWhile: skipWhile,
        take: take,
        takeLast: takeLast,
        takeUntil: takeUntil,
        takeWhile: takeWhile,
        where: where
    });

    function iterateIndexes(source) {
        if (!source)
            throw new exceptions.ArgumentNullException('source');
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

    function range(start = 0, maxInclusive = Infinity, step = 1) {
        return {
            *[Symbol.iterator]() {
                for (let i = start; i <= maxInclusive; i += step) {
                    yield i;
                }
            }
        };
    }

    function repeat(entry, count) {
        return {
            *[Symbol.iterator]() {
                for (let i = 0; i < count; i++)
                    yield entry;
            }
        };
    }

    function repeatSequence(sequence, count) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
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

    function unfold(seed, valueFactory, skipSeed = false) {
        if (!valueFactory)
            throw new exceptions.ArgumentNullException('valueFactory');
        return {
            *[Symbol.iterator]() {
                if (!skipSeed)
                    yield seed;
                let value = seed, i = skipSeed ? 0 : 1;
                while (true) {
                    value = valueFactory(value, i++);
                    yield value;
                }
            }
        };
    }

    function union(...sequences) {
        return distinct(merge(sequences));
    }

    function zip(sequence1, sequence2, selector) {
        if (!sequence1)
            throw new exceptions.ArgumentNullException('sequence1');
        if (!sequence2)
            throw new exceptions.ArgumentNullException('sequence2');
        if (!selector)
            throw new exceptions.ArgumentNullException('selector');
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

    /*!
     * @author electricessence / https://github.com/electricessence/
     * @license MIT
     */

    var iterables = /*#__PURE__*/Object.freeze({
        __proto__: null,
        concat: concat,
        empty: empty,
        iterateIndexes: iterateIndexes,
        merge: merge,
        range: range,
        repeat: repeat,
        repeatSequence: repeatSequence,
        unfold: unfold,
        union: union,
        zip: zip
    });

    function applyFilters(sequence, filters) {
        for (const filter of filters) {
            sequence = filter(sequence);
        }
        return sequence;
    }

    function select(selector) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const e of sequence) {
                        yield selector(e, i++);
                    }
                }
            };
        };
    }

    function identity(e) { return e; }

    function selectMany(selector = identity) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    let i = 0;
                    for (const outer of sequence) {
                        for (const inner of selector(outer, i++))
                            yield inner;
                    }
                }
            };
        };
    }

    class LinqBase {
        source;
        create;
        constructor(source, create) {
            this.source = source;
            this.create = create;
        }
        [Symbol.iterator]() {
            return this.source[Symbol.iterator]();
        }
        filter(filter) {
            return this.create(filter(this.source));
        }
        filterWith(...filters) {
            return filters.length === 0 ? this : this.applyFilters(filters);
        }
        applyFilters(filters) {
            const source = this.source;
            const s = applyFilters(source, filters);
            return s == source ? this : this.create(s);
        }
        where(predicate) {
            return this.filter(where(predicate));
        }
        resolve(resolver) {
            return resolver(this.source);
        }
        transform(transform) {
            return transform(this.source);
        }
        select(selector) {
            return select(selector)(this.source);
        }
        selectMany(selector) {
            return selectMany(selector)(this.source);
        }
        skip(count) {
            return this.filter(skip(count));
        }
        take(count) {
            return this.filter(take(count));
        }
    }

    class Linq extends LinqBase {
        source;
        constructor(source) {
            super(source, source => new Linq(source));
            this.source = source;
        }
        [Symbol.iterator]() {
            return this.source[Symbol.iterator]();
        }
        filter(filter) {
            return super.filter(filter);
        }
        transform(transform) {
            return new Linq(transform(this.source));
        }
        select(selector) {
            return this.transform(select(selector));
        }
        selectMany(selector) {
            return this.transform(selectMany(selector));
        }
    }
    function linq(source) {
        if (source instanceof Linq)
            return source;
        return new Linq(source);
    }

    function groupBy(keySelector) {
        return function (sequence) {
            return {
                *[Symbol.iterator]() {
                    const map = new Map(), iterator = sequence[Symbol.iterator]();
                    let i = 0;
                    function mapNext() {
                        const next = iterator.next();
                        if (next.done)
                            return null;
                        const e = next.value;
                        const key = keySelector(e, i++);
                        let elements = map.get(key);
                        const isFirstOf = !elements;
                        if (!elements)
                            map.set(key, elements = []);
                        elements.push(e);
                        return { key, elements, isFirstOf };
                    }
                    let next = mapNext();
                    while (next) {
                        const { key, elements } = next;
                        yield new GroupingResult(key, {
                            *[Symbol.iterator]() {
                                let n = 0;
                                while (n < elements.length || next) {
                                    if (n < elements.length)
                                        yield elements[n++];
                                    else if (next)
                                        next = mapNext();
                                }
                            }
                        });
                        do {
                            next = mapNext();
                        } while (next && !next.isFirstOf);
                    }
                    map.clear();
                }
            };
        };
    }
    class GroupingResult {
        key;
        elements;
        constructor(key, elements) {
            this.key = key;
            this.elements = elements;
            Object.freeze(this);
        }
        [Symbol.iterator]() {
            return this.elements[Symbol.iterator]();
        }
    }

    function all(predicate) {
        if (!predicate)
            throw new exceptions.ArgumentNullException('predicate');
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            if (sequence instanceof Array)
                return sequence.every(predicate);
            let i = 0;
            for (const e of sequence) {
                if (!predicate(e, i++))
                    return false;
            }
            return true;
        };
    }

    function isEmpty(sequence) {
        return !sequence
            || sequence instanceof Array && (sequence.length === 0)
            || sequence[Symbol.iterator]().next().done === true;
    }

    function any(predicate) {
        return function (sequence) {
            if (!sequence)
                return false;
            if (!predicate) {
                return !isEmpty(sequence);
            }
            if (sequence instanceof Array)
                return sequence.some(predicate);
            let i = 0;
            for (const e of sequence) {
                if (predicate(e, i++))
                    return true;
            }
            return false;
        };
    }

    function aggregate(reducer, initialValue) {
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            let i = 0;
            if (initialValue === undefined) {
                const iterator = sequence[Symbol.iterator]();
                let n = iterator.next();
                if (n.done)
                    throw new exceptions.InvalidOperationException('Sequence is empty.  Specify an initial value allow for an empty iterable.');
                let previous = n.value;
                while (!(n = iterator.next()).done) {
                    previous = reducer(previous, n.value, ++i);
                }
                return previous;
            }
            else {
                let previous = initialValue;
                for (const current of sequence)
                    previous = reducer(previous, current, i++);
                return previous;
            }
        };
    }

    const a = aggregate((p) => p + 1, 0);
    function count(sequence) {
        if (sequence instanceof Array)
            return sequence.length;
        return sequence ? a(sequence) : 0;
    }

    function single(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        let hasElements;
        if (sequence instanceof Array) {
            const len = sequence.length;
            hasElements = len !== 0;
            if (len === 1)
                return sequence[0];
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            hasElements = !first.done;
            if (hasElements && iterator.next().done)
                return first.value;
        }
        throw new exceptions.InvalidOperationException(hasElements
            ? 'Sequence contains more than one element.'
            : 'The sequence is empty.');
    }

    function singleOrDefault(defaultValue) {
        return function (sequence) {
            if (!sequence)
                return defaultValue;
            if (sequence instanceof Array) {
                switch (sequence.length) {
                    case 0: return defaultValue;
                    case 1: return sequence[0];
                }
            }
            else {
                const iterator = sequence[Symbol.iterator]();
                const first = iterator.next();
                if (first.done)
                    return defaultValue;
                if (iterator.next().done)
                    return first.value;
            }
            throw new Error('Sequence contains more than one element.');
        };
    }

    function first(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        if (sequence instanceof Array) {
            if (sequence.length != 0)
                return sequence[0];
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            if (!first.done)
                return first.value;
        }
        throw new exceptions.InvalidOperationException('The sequence is empty.');
    }

    function firstOrDefault(defaultValue) {
        return function (sequence) {
            if (!sequence)
                return defaultValue;
            if (sequence instanceof Array)
                return sequence.length == 0 ? defaultValue : sequence[0];
            const iterator = sequence[Symbol.iterator]();
            const first = iterator.next();
            return first.done ? defaultValue : first.value;
        };
    }

    function last(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        if (sequence instanceof Array) {
            if (sequence.length != 0)
                return sequence[sequence.length - 1];
        }
        else {
            const iterator = sequence[Symbol.iterator]();
            let next = iterator.next();
            if (!next.done) {
                let last;
                do {
                    last = next.value;
                    next = iterator.next();
                } while (!next.done);
                return last;
            }
        }
        throw new exceptions.InvalidOperationException('The sequence is empty.');
    }

    function lastOrDefault(defaultValue) {
        return function (sequence) {
            if (!sequence)
                return defaultValue;
            if (sequence instanceof Array) {
                return sequence.length == 0
                    ? defaultValue
                    : sequence[sequence.length - 1];
            }
            let last = defaultValue;
            for (const current of sequence)
                last = current;
            return last;
        };
    }

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

    class LinqExtended extends LinqExtendedBase {
        source;
        constructor(source) {
            super(source, source => new LinqExtended(source));
            this.source = source;
        }
        filter(filter) {
            return super.filter(filter);
        }
        transform(transform) {
            return new LinqExtended(transform(this.source));
        }
        select(selector) {
            return this.transform(select(selector));
        }
        selectMany(selector) {
            return this.transform(selectMany(selector));
        }
        groupBy(keySelector) {
            return this
                .transform(groupBy(keySelector))
                .select(g => new LinqGrouping(g));
        }
    }
    class LinqGrouping extends LinqExtended {
        key;
        constructor(grouping) {
            super(grouping.elements);
            this.key = grouping.key;
        }
    }
    function linqExtended(source) {
        if (source instanceof LinqExtended)
            return source;
        return new LinqExtended(source);
    }

    function asArray(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        if (sequence instanceof Array)
            return sequence;
        const result = [];
        for (const e of sequence)
            result.push(e);
        return result;
    }

    function average(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        let sum = 0, count = 0;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            sum += s;
            count++;
        }
        if (count === 0)
            throw new exceptions.InvalidOperationException('Sequence is empty.');
        return sum / count;
    }

    function indexOf(entry) {
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            if (sequence instanceof Array)
                return sequence.indexOf(entry);
            let i = 0;
            for (const e of sequence) {
                if (compare.areEqual(e, entry))
                    return i;
                i++;
            }
            return -1;
        };
    }

    function contains(entry) {
        return function (sequence) {
            return indexOf(entry)(sequence) !== -1;
        };
    }

    function elementAt(index) {
        integer.assertZeroOrGreater(index);
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            let count = 0;
            if (sequence instanceof Array) {
                count = sequence.length;
                if (index < count)
                    return sequence[index];
            }
            else {
                for (const e of sequence) {
                    if (index === count++)
                        return e;
                }
            }
            throw new exceptions.ArgumentOutOfRangeException('index', index, 'Exceeds the total number of elements: ' + count);
        };
    }

    function elementAtOrDefault(index, defaultValue) {
        integer.assertZeroOrGreater(index);
        return function (sequence) {
            if (!sequence)
                return defaultValue;
            if (sequence instanceof Array)
                return index < sequence.length ? sequence[index] : defaultValue;
            let count = 0;
            for (const e of sequence) {
                if (index === count++)
                    return e;
            }
            return defaultValue;
        };
    }

    function hasAny(sequence) {
        return !isEmpty(sequence);
    }

    function joinStrings(separator = '') {
        if (separator == null)
            separator = '';
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            const i = sequence[Symbol.iterator]();
            let n = i.next();
            if (n.done)
                return '';
            let result = '' + n.value;
            while (!(n = i.next()).done) {
                result += separator + n.value;
            }
            return result;
        };
    }

    function lastIndexOf(item) {
        return function (sequence) {
            if (!sequence)
                throw new exceptions.ArgumentNullException('sequence');
            if (sequence instanceof Array)
                return sequence.lastIndexOf(item);
            let i = 0, last = -1;
            for (const e of sequence) {
                if (compare.areEqual(e, item))
                    last = i;
                i++;
            }
            return last;
        };
    }

    function max(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        const i = sequence[Symbol.iterator]();
        let n = i.next();
        if (n.done)
            throw new exceptions.InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
        let max = n.value;
        while (!(n = i.next()).done) {
            if (n.value > max)
                max = n.value;
        }
        return max;
    }

    function min(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        const i = sequence[Symbol.iterator]();
        let n = i.next();
        if (n.done)
            throw new exceptions.InvalidOperationException('Sequence is empty.  Use defaultIfEmpty to ensure a default value.');
        let min = n.value;
        while (!(n = i.next()).done) {
            if (n.value < min)
                min = n.value;
        }
        return min;
    }

    function product(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        let product = 1, hasEntries = false;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            hasEntries = true;
            product *= s;
        }
        return hasEntries ? product : NaN;
    }

    function sequenceEqual(other, equalityComparer = compare.areEqual) {
        return function (sequence) {
            return compare.areSequencesEqual(sequence, other, equalityComparer);
        };
    }

    function sum(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        let sum = 0;
        for (const s of sequence) {
            if (isNaN(s))
                return NaN;
            sum += s;
        }
        return sum;
    }

    function sumAndCount(sequence) {
        if (!sequence)
            throw new exceptions.ArgumentNullException('sequence');
        let sum = 0, count = 0;
        for (const s of sequence) {
            if (isNaN(s))
                return { value: NaN, count: NaN };
            sum += s;
            count++;
        }
        return {
            value: sum,
            count: count
        };
    }

    function toMap(keySelector, valueSelector = identity, mappingBehavior = -1) {
        if (!keySelector)
            throw new exceptions.ArgumentNullException('keySelector');
        if (typeof valueSelector == 'number') {
            mappingBehavior = valueSelector;
            valueSelector = undefined;
        }
        if (!valueSelector)
            valueSelector = identity;
        return function (sequence) {
            const result = new Map();
            let i = 0;
            for (const e of sequence) {
                const key = keySelector(e, i++);
                if (result.has(key))
                    switch (mappingBehavior) {
                        case 0:
                            continue;
                        case -1:
                            throw new Error('MappingMode.Throw: more than one of the same key encountered.');
                    }
                result.set(key, valueSelector(e, i - 1));
            }
            return result;
        };
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * @license MIT
     */

    var resolutions = /*#__PURE__*/Object.freeze({
        __proto__: null,
        aggregate: aggregate,
        all: all,
        any: any,
        asArray: asArray,
        average: average,
        contains: contains,
        count: count,
        elementAt: elementAt,
        elementAtOrDefault: elementAtOrDefault,
        first: first,
        firstOrDefault: firstOrDefault,
        hasAny: hasAny,
        indexOf: indexOf,
        isEmpty: isEmpty,
        joinStrings: joinStrings,
        last: last,
        lastIndexOf: lastIndexOf,
        lastOrDefault: lastOrDefault,
        max: max,
        min: min,
        product: product,
        sequenceEqual: sequenceEqual,
        single: single,
        singleOrDefault: singleOrDefault,
        sum: sum,
        sumAndCount: sumAndCount,
        toArray: toArray,
        toMap: toMap
    });

    function notNull(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    if (e !== null)
                        yield e;
            }
        };
    }

    function notUndefined(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    if (e !== undefined)
                        yield e;
            }
        };
    }

    function notNullOrUndefined(sequence) {
        return {
            *[Symbol.iterator]() {
                for (const e of sequence)
                    if (e != null)
                        yield e;
            }
        };
    }

    function rows(columns) {
        if (columns == null)
            throw new exceptions.ArgumentNullException('columns');
        return {
            *[Symbol.iterator]() {
                const iterators = [];
                let row = [], count = 0;
                for (const c of columns) {
                    const i = c[Symbol.iterator]();
                    const n = i.next();
                    if (n.done == true) {
                        row.push(null);
                        iterators.push(null);
                    }
                    else {
                        count++;
                        row.push(n);
                        iterators.push(i);
                    }
                }
                if (count == 0)
                    return;
                yield row;
                const len = iterators.length;
                do {
                    row = [];
                    count = 0;
                    for (let i = 0; i < len; i++) {
                        const n = iterators[i]?.next();
                        if (!n) {
                            row.push(null);
                        }
                        else if (n.done) {
                            row.push(null);
                            iterators[i] = null;
                        }
                        else {
                            row.push(n);
                            count++;
                        }
                    }
                    if (count)
                        yield row;
                } while (count);
            }
        };
    }

    function weave(sequences) {
        if (!sequences)
            throw new exceptions.ArgumentNullException('sequences');
        return {
            *[Symbol.iterator]() {
                const iterators = new linkedNodeList.LinkedValueNodeList();
                for (const s of sequences) {
                    const i = s[Symbol.iterator]();
                    const n = i.next();
                    if (n.done)
                        continue;
                    yield n.value;
                    iterators.addNode({ value: i });
                }
                while (iterators.unsafeCount) {
                    let node = iterators.first;
                    while (node) {
                        const c = node;
                        node = c.next;
                        const n = c.value.next();
                        if (n.done)
                            iterators.removeNode(c);
                        else
                            yield n.value;
                    }
                }
            }
        };
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * @license MIT
     */

    var transforms = /*#__PURE__*/Object.freeze({
        __proto__: null,
        GroupingResult: GroupingResult,
        groupBy: groupBy,
        notNull: notNull,
        notNullOrUndefined: notNullOrUndefined,
        notUndefined: notUndefined,
        rows: rows,
        select: select,
        selectMany: selectMany,
        weave: weave
    });

    exports.default = linq;
    exports.filters = filters;
    exports.iterables = iterables;
    exports.linqExtended = linqExtended;
    exports.resolutions = resolutions;
    exports.transforms = transforms;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=linq.js.map
