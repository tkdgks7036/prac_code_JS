function solution(s) {
    let arr = [];

    for (let c of s) {
        if (s.indexOf(c) === s.lastIndexOf(c)) arr.push(c);
    };

    return arr.sort().join('');
};