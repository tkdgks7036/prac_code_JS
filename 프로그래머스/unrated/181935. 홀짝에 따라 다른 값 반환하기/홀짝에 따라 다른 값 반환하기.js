function solution(n) {
    let arr = [];

    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i += 2) {
            arr.push(i);
        };

        return arr.reduce((acc, cur) => acc + cur);
    } else {
        for (let i = 2; i <= n; i += 2) {
            arr.push(i);
        };

        return arr.map(x => x ** 2).reduce((acc, cur) => acc + cur);
    }
};