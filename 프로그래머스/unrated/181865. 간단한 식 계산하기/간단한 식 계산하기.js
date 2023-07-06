function solution(binomial) {
    let cal = binomial.split(' ');

    switch (cal[1]) {
        case '+': return Number(cal[0]) + Number(cal[2]);
        case '-': return Number(cal[0]) - Number(cal[2]);
        case '*': return Number(cal[0]) * Number(cal[2]);
        case '/': return Number(cal[0]) / Number(cal[2]);
    };
};