function solution(n, control) {
    let alpha_info = {
        w: 1,
        s: -1,
        d: 10,
        a: -10
    };

    return [...control].reduce((acc, cur) => acc + alpha_info[cur], n);
}