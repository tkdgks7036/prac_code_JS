function solution(arr) {
    let n = 0;

    while (Math.pow(2, n) < arr.length) {
        n++;
    }

    let gab = Math.pow(2, n) - arr.length;

    if (gab === 0) return arr;
    if (gab > 0) arr.push(Array(gab).fill(0));

    return arr.flat();
}