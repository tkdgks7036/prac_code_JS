function solution(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        cnt = 0;
        for (let j = 1; j <= n; j++) {
            if (i % j === 0) cnt ++
        };

        if (cnt >= 3) arr.push(i);
    };

    return arr.length;
};