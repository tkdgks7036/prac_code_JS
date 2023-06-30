function solution(a, b) {
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    b = b / gcd(a, b);

    while (b != 1) {
        if (b % 2 === 0) {
            b /= 2;
        }
        else if (b % 5 === 0) {
            b /= 5;
        }
        else {
            return 2;
        };
    };

    return 1;
}