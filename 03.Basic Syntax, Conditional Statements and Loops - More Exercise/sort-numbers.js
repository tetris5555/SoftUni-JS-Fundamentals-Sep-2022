function solution(a, b, c) {
    if (a > b) {

        if (a > c) {
            // a is max of three
            console.log(a);

            if (b > c) {
                console.log(b);
                console.log(c);
            } else {
                console.log(c);
                console.log(b);
            }

        } else {
            // c is max of three
            console.log(c);

            if (a > b) {
                console.log(a);
                console.log(b);
            } else {
                console.log(b);
                console.log(a);
            }

        }

    } else {

        if (b > c) {
            // b is max of three
            console.log(b);

            if (a > c) {
                console.log(a);
                console.log(c);
            } else {
                console.log(c);
                console.log(a);
            }

        } else {
            // c is max of three
            console.log(c);

            if (a > b) {
                console.log(a);
                console.log(b);
            } else {
                console.log(b);
                console.log(a);
            }
        }
    }
}