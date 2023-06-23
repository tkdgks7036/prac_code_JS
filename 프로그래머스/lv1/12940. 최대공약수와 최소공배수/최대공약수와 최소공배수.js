function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}

// 아래의 식을 함수로 리팩토링 해보자.
// gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

// function gcd(a, b) {
//     let rest = a % b;
//     if (rest === 0) return b;
//     return gcd(b, rest);
// };