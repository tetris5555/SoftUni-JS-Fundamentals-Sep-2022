function solve(country) {
    let output;

    switch (country) {
        case 'England':
        case 'USA':
            output = 'English';
            break;
        
        case 'Mexico':
        case 'Argentina':
        case 'Spain':
            output = 'Spanish';
            break;
        
        default:
            output = 'unknown';
            break;
    }
    console.log(output);
}