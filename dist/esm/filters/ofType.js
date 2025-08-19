import where from './where.js';

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

export { ofType as default };
//# sourceMappingURL=ofType.js.map
