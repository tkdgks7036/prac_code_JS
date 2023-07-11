function solution(bin1, bin2) {
    // 먼저, bin1 과  bin2 값을 10진법으로 변환
    // 10진법으로 변환한 값들을 더한 후 다시 2진법으로 재변환
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
};