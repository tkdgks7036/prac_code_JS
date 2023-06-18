function solution(n) {
    let n_arr = n.toString().split('');
    return Number(n_arr.sort((a, b) => b - a).join(''));
};