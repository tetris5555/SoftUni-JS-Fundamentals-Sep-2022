function solution(x1, y1, x2, y2) {
    let distance = (x1 - x2) **2;
    distance += (y1 - y2) ** 2;

    return Math.sqrt(distance);
}

// solution(2, 4, 5, 0);