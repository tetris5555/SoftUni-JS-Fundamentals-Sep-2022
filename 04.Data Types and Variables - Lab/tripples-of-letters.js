function solve (num) {
    let letters = [];
    for (let letter = 0; letter < num; letter++) {
        letters.push(String.fromCodePoint(97 + letter));
    }

    // it is product of 3 letters
    for (let i = 0; i < num; i++) {

        for (let j = 0; j < num; j++) {
            
            for (let k = 0; k < num; k++){

                console.log(`${letters[i]}${letters[j]}${letters[k]}`);

            }
        }
    }
}

solve(3);