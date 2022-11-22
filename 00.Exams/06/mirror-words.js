function solve(arr) {
    const text = arr[0];
    const re = /(@|#)(?<left>[a-z]{3,})\1\1(?<right>[a-z]{3,})\1/gi;
    const m = text.matchAll(re);
    let pairs = 0;
    const mirrorWords = [];

    [...m].forEach(e => {
        pairs++;
        const {left, right} = e.groups;

        if (isMirror(left, right)) {
            mirrorWords.push(`${left} <=> ${right}`);
        }
    });

    const msg1 = pairs > 0 ? `${pairs} word pairs found!` : 'No word pairs found!';
    const msg2 = mirrorWords.length > 0 ? `The mirror words are:\n${mirrorWords.join(', ')}` : 'No mirror words!';

    console.log(msg1);
    console.log(msg2);

    // -----------------------------
    function isMirror(a, b) {
        if (a.length != b.length) {
            return false;
        }

        let j = a.length - 1;
        for (let i = 0; i < a.length; i++) {
            if (a.charAt(i) != b.charAt(j)) {
                return false;
            }
            j--;
        }
        return true;
    }
}