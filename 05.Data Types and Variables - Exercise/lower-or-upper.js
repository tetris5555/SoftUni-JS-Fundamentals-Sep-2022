function solve(chr) {
    if (chr.charCodeAt() >= 65 && chr.charCodeAt() <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}


solve('n');