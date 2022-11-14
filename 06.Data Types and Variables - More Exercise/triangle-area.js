function solve(a, b, c) {
    /*
    Calculate a triangle’s area by its 3 sides
    Use Heron’s formula:
    Area = sqrt(s * (s - a) * (s - b) * (s - c))

    where s is semi-perimeter: s = (a + b +c) / 2
    */

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);
}


solve(3, 5.5, 4);