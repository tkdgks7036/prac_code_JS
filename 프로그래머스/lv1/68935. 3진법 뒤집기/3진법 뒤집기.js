function solution(n) {
    let n_3 = n.toString(3).split('');
    let arr_n_3 = [...n_3].reverse().join('');

    return parseInt(arr_n_3, 3);
}