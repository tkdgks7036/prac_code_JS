function solution(arr) {
  let answer = 1;

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}