function solve(first, chr, last) {
    const result = first.replace('_', chr) === last ? 'Matched' : 'Not Matched';
    console.log(result);
}


solve('Str_ng', 'I', 'Strong'); // not matched
solve('Str_ng', 'i', 'String'); // matched