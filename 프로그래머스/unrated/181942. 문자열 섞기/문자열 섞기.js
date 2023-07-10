function solution(str1, str2) {
    return [...str1].map((x, idx) => {
        return x + str2[idx];
    }).join('');
};