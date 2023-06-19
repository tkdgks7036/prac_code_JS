function solution(l, r) {
    let arr = [];

    for (let i = l; i <= r; i++) {
        if (i % 5 !== 0) continue;
        let check = [...i.toString()];
        if (check.every(x => x === '0' || x === '5')) arr.push(i);
    };

    return (arr.length === 0) ? [-1] : arr;
}