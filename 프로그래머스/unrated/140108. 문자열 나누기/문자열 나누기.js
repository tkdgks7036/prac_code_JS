function solution(s) {
    let result = 0;
    let group1 = 0;
    let group2 = 0;
    let str = '';

    for (let i of s) {
        if (!str) str = i;

        if (str.includes(i)) group1++;
        else group2++;

        if (group1 === group2) {
            result++;
            group1 = 0;
            group2 = 0;
            str = '';
        }
    };

    if (str) result++;

    return result;
};