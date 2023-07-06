function solution(a, b, c) {
    let dice = [...new Set([a, b, c])];

    // new Set 만 사용하여 dice 변수에 담을 경우
    // 결과값은 Set(3) {2, 6, 1}
    // 배열의 형태가 아니기 때문에 메서드 사용에 주의할 것
    // let dice = new Set([a, b, c]);

    let sum = a + b + c;

    if (dice.length === 3) return sum;
    else if (dice.length === 2) return sum * (a ** 2 + b ** 2 + c ** 2);
    else return Math.pow(sum, 3) * Math.pow(a, 3);
};