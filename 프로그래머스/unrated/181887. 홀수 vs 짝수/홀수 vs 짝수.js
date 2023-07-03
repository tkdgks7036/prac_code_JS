function solution(num_list) {
    let even = [];
    let odd = [];

    num_list.map((x, idx) => (idx % 2 === 0) ? even.push(x) : odd.push(x));

    let evenSum = even.reduce((acc, cur) => acc + cur);
    let oddSum = odd.reduce((acc, cur) => acc + cur);

    return Math.max(evenSum, oddSum);
};