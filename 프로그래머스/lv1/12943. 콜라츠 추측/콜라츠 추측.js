function solution(n) {
    let count = 0;

    while (true) {
        if (count >= 500) {
            return -1;
        } else if (n !== 1) {
            (n % 2 === 0) ? n = n / 2 : n = (n * 3) + 1
        } else if (n === 1) {
            return count;
        };

        count++;
    };
};