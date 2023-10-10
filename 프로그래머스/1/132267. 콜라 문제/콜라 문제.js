function solution(a, b, n) {
  answer = 0;

  while (n >= a) {
    const remainBottle = n % a;
    // Math.ceil 과 헷갈리지 않도록 주의할 것
    n = Math.floor(n / a) * b;

    answer += n;
    n += remainBottle;
  }

  return answer;
}