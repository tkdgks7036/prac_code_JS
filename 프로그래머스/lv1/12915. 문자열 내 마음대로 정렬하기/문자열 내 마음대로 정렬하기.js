// 아래의 기능들을 함수화
function solution(strings, n) {
    let newStrings = [];

    // n번째 index 에 있는 문자열을 맨 앞으로 붙이는 과정
    for (let i = 0; i < strings.length; i++) {
        let newWord = strings[i][n] + strings[i];
        newStrings.push(newWord);
    };

    // 가공된 배열들을 사전식 정렬
    newStrings.sort();

    // 사전식 정렬된 배열의 맨 앞글자를 다시 삭제하는 과정
    for (let i = 0; i < newStrings.length; i++) {
        newStrings[i] = newStrings[i].slice(1);
    };

    return newStrings;
};