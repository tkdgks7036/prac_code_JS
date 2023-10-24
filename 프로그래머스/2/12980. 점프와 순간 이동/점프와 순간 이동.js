function solution(n) {
  let answer = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      answer++;
      n--;
    }
  }

  return answer;
}