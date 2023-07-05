function solution(n) {
    let arr = [];
    let num = 1;

    while (arr.length < n) {
        if (num < 10) {
            if (num % 3 === 0) { num++; }
            else {
                arr.push(num);
                num++
            };
        } else {
            if (num % 3 === 0) { num++; }

            if ([...num.toString()].includes('3')) { num++; }
            else {
                arr.push(num);
                num++
            };
        };
    };

    return arr.at(-1);
};