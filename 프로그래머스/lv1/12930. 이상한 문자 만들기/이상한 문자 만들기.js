function solution(s) {
    let str = s.split(' ');
    let change = [];

    for (let i = 0; i < str.length; i++) {
        let word = str[i].split('').map((a, idx) => {
            if (idx % 2 === 0) {
                return a.toUpperCase();
            }
            else {
                return a.toLowerCase();
            }
        }).join('');
        change.push(word);
    };

    return change.join(' ');
}