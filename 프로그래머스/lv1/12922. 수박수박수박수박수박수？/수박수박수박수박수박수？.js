function solution(n) {
    let str_repeat = '';

    for (let i = 0; i < n; i++) {
        (i % 2 === 0) ? str_repeat += '수' : str_repeat += '박';
    };

    return str_repeat;
}