function solution(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1;
    if (ineq === '<' && Math.max(n, m) === m) return 1;
    if (ineq === '>' && Math.max(n, m) === n) return 1;

    return 0;
};