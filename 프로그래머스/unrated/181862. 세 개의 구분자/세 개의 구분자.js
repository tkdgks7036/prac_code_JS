function solution(myStr) {
    // 1. myStr 문자열의 상태를 replace + length 를 통해 체크
    // length === 0 이라면 a, b, c 로만 이루어진 문자열
    if (myStr.replace(/[abc]/g, "").length === 0) return ["EMPTY"];

    // 문제에서 주어진 a,b,c 를 기준으로 split
    // split 으로 인해 생긴 '' 부분은 filter 로 제거
    else return myStr.split(/[abc]/g).filter(x => x != '');
};