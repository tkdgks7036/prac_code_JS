function solution(sides) {
    let [a, b] = sides.sort((a, b) => a - b);

    return a + ((a + b) - b - 1);
};