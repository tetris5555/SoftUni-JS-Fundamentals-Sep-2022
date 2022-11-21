function solve(arr) {
    const text = arr[0];
    const out = [];
    let totalCal = 0;
    const re = /(#|\|)[a-z\s]+\1\d{2}\/\d{2}\/\d{2}\1\d{1,5}\1/gi;

    if (re.test(text)) {
        for (const m of text.match(re)) {
            const [, item, exp, cal, ] = m.split(/#|\|/);
            const msg = `Item: ${item}, Best before: ${exp}, Nutrition: ${cal}`; // item, expiration date, calories
            out.push(msg);
            totalCal += Number(cal);
        }
    }
    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    out.forEach(e => console.log(e));
}


solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
