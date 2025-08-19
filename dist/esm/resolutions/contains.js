import indexOf from './indexOf.js';

function contains(entry) {
    return function (sequence) {
        return indexOf(entry)(sequence) !== -1;
    };
}

export { contains as default };
//# sourceMappingURL=contains.js.map
