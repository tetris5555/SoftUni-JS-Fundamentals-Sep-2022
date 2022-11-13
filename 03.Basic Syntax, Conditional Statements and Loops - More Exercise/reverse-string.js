function solution(string) {
    let reversedString = '';

    for (let i = string.length - 1; i > -1; i--) {
        reversedString += string.charAt(i);
    }

    console.log(reversedString);
}