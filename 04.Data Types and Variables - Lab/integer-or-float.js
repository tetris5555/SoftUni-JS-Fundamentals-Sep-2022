function solution(a, b, c) {
    const result = a + b + c;
    const numberType = (result % 1 == 0) ? 'Integer' : 'Float';

    console.log(`${result} - ${numberType}`);
}


// solution(9, 100, 1.1);
solution(100, 200, 303);