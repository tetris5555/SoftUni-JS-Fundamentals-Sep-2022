function solve(param) {
    const paramType = typeof(param);

    console.log(paramType);

    switch (paramType) {
        case 'string':
        case 'number':
            console.log(param);
            break;
        default:
            console.log('Parameter is not suitable for printing');
    }
}


solve(18);